import * as Yup from "yup";
import Button from "../Button";
import FormControl from "../Form/FormControl";
import useValue from "../../utils/DynamicForm";
import classes from "./new-contacts.module.scss";
import { useState } from "react";
import { Formik, Form } from "formik";
import { Col, Divider, Row } from "antd";
import { useLocation } from "react-router-dom";
import { CloudUploadOutlined } from "@ant-design/icons";
import { positions, gender, getNews } from "../../mock/formOptions";

const ContactsForm = () => {
  const [uploadImg] = useState("");
  const { pathname } = useLocation();
  const path = pathname.split("/")[2];
  const { value, dispatchNano } = useValue(path);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    surname: Yup.string().required("Required"),
    fatherName: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    additionalInfo: Yup.string().required("Required"),
    faculty: Yup.string().required("Required"),
    position: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    dispatchNano(values);
    console.log(values);
  };
  return (
    <>
      <Divider orientation="left" className={classes.divider}>
        {path === "edit" ? (
          <span>Edit Contact</span>
        ) : (
          <span>Add New Contact</span>
        )}
      </Divider>
      <Formik
        initialValues={value}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className={classes.form_container}>
            {/* First row ~ UPLOAD IMAGE */}
            <Row justify="center">
              <Col span={24} className={classes.file}>
                <label htmlFor="file">
                  <CloudUploadOutlined />
                  {!uploadImg ? (
                    <div>Dizayn üçün - Hal hazirda disable edilib</div>
                  ) : (
                    <div>{uploadImg}</div>
                  )}
                </label>
                <input
                  id="file"
                  type="file"
                  name="image"
                  accept=".jpg,.jpeg,.png,.svg"
                  disabled={true}
                  // onChange={(val) => {
                  //   const reader = new FileReader();
                  //   reader.onload = function () {
                  //     formik.setFieldValue("image", reader.result);
                  //   };
                  //   reader.readAsDataURL(val.target.files[0]);
                  //   console.log(formik.errors);
                  //   setUploadImg(
                  //     formik.errors.file
                  //       ? formik.errors.file
                  //       : val.target.files[0].name
                  //   );
                  // }}
                />
              </Col>
            </Row>
            {/* Second row ~ NAME, SURNAME, FATHER NAME */}
            <Row justify="space-between" style={{ width: "100%" }}>
              <Col span={7}>
                <FormControl
                  control="input"
                  type="text"
                  label="Name"
                  name="name"
                  error={formik.errors.name && formik.touched.name}
                />
              </Col>
              <Col span={7}>
                <FormControl
                  control="input"
                  type="text"
                  label="Surname"
                  name="surname"
                  error={formik.errors.surname && formik.touched.surname}
                />
              </Col>
              <Col span={7}>
                <FormControl
                  control="input"
                  type="text"
                  label="Father Name"
                  name="fatherName"
                  error={formik.errors.fatherName && formik.touched.fatherName}
                />
              </Col>
            </Row>
            {/* Fourth row ~ EMAIL, FACULTY, POSITION */}
            <Row justify="space-between">
              <Col span={7}>
                <FormControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                  error={formik.errors.email && formik.touched.email}
                />
              </Col>
              <Col span={7}>
                <FormControl
                  control="input"
                  type="text"
                  label="Faculty"
                  name="faculty"
                  error={formik.errors.faculty && formik.touched.faculty}
                />
              </Col>
              <Col span={7}>
                <FormControl
                  control="select"
                  label="Position"
                  name="position"
                  options={positions}
                  error={formik.errors.position && formik.touched.position}
                />
              </Col>
            </Row>
            {/* Fifth row ~ TEXTAREA */}
            <Row>
              <Col span={24}>
                <FormControl
                  control="textarea"
                  label="Additional Info"
                  name="additionalInfo"
                  error={
                    formik.errors.additionalInfo &&
                    formik.touched.additionalInfo
                  }
                />
              </Col>
            </Row>
            {/* Sixth row ~ RADİO BUTTONS */}
            <Row justify="start">
              <Row>
                <Col span={24}>
                  <FormControl
                    control="radio"
                    label="Gender"
                    name="gender"
                    options={gender}
                    error={formik.errors.gender && formik.touched.gender}
                  />
                </Col>
              </Row>
            </Row>
            {/* Seventh row ~ CHECKBOX */}
            <Row justify="start">
              <Row>
                <Col span={24}>
                  <FormControl
                    control="checkbox"
                    label=""
                    name="getNews"
                    options={getNews}
                  />
                </Col>
              </Row>
            </Row>
            {/* SUBMİT BUTTON */}
            <Row justify="end">
              <Col span={12}>
                <Button type="submit" class={classes.submit_button}>
                  {path === "edit" ? <span>Edit</span> : <span>Submit</span>}
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactsForm;
