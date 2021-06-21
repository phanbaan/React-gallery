import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import firebase from "../config/firebase";
import * as Yup from "yup";
export default function SignUp() {
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, formikBag) => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(values.email, values.password)
          .then((res) => {
            history.replace("/");
          })
          .catch((e) => {
            formikBag.setFieldError("email", e.message);
          });
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Email nhập chưa đúng")
          .required("Email chưa được nhập"),
        password: Yup.string()
          .required("Mật khẩu chưa được nhập")
          .min(8, "Mật khẩu phải dài hơn 8 ký tự"),
      })}
    >
      <div className="login">
        <Form className="form">
          <h1 className="form__title">Đăng ký tài khoản</h1>

          <Field
            className="form__input"
            type="email"
            placeholder="Email"
            name="email"
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // {...formik.getFieldProps("email")}
          />
          <p className="error__text">
            <ErrorMessage name="email" />
          </p>
          {/* {formik.touched.email && formik.errors.email ? (
              <p className="error__text">{formik.errors.email}</p>
            ) : null} */}
          <Field
            className="form__input"
            type="password"
            placeholder="Mật khẩu"
            name="password"
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // {...formik.getFieldProps("password")}
          />
          <p className="error__text">{<ErrorMessage name="password" />}</p>
          {/* {formik.touched.password && formik.errors.password ? (
              <p className="error__text">{formik.errors.password}</p>
            ) : null} */}
          <button className="btn__login" type="submit">
            Đăng ký
          </button>
        </Form>
      </div>
    </Formik>
  );
}
