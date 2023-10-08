import { Formik,useField, Form, Field, ErrorMessage } from "formik";
/*
const style={
  title:"text-4xl hover:tracking-widest tracking-wider font-semibold text-center",
  formparentcontainer:"flex justify-center",
  formcontainer:"border-2 w-1/3 p-3 mt-10 hover:border-cyan-200",
  formika:"grid grid-col-1 gap-4 justify-center",
  email:"p-3 mt-5 border-2 rounded-xl border-cyan-400 ",
  messg:"p-3  border-2 border-cyan-400 rounded-xl",
  submitbutton:" p-3 rounded-full hover:tracking-widest text-white font-semibold bg-[#00B5E2] "
  
}*/
//KUNAL:
const style = {
  title: "text-2xl md:text-4xl hover:tracking-widest tracking-wider font-semibold text-center",
  formparentcontainer: "flex justify-center",
  formcontainer: "border-2 w-full md:w-1/3 p-3 mt-10 hover:border-cyan-200",
  formika: "grid grid-col-1 gap-4 justify-center",
  email: "p-3 mt-5 border-2 rounded-xl border-cyan-400",
  messg: "p-3 border-2 border-cyan-400 rounded-xl",
  submitbutton: "p-3 rounded-full hover:tracking-widest text-white font-semibold bg-[#00B5E2]",
};

const MyTextArea = ({...props}) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
      <>
          <textarea className="text-area" {...field} {...props} />
          {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
          ) : null}
      </>
  );
};

export default function ContactUs(){
  return(
    <div>
    <div className={style.formparentcontainer}>
    <div className={style.formcontainer}>
      <Formik
      
      initialValues={{ email: "", messg: "" ,response:"Your suggestion is with us now!!"}}
      validate={(values) => {
        const errors = {};

        if (!values.email || !values.messg) {
          errors.email = "* Required";
          errors.mssg = "* Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 3));

          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={style.formika}>
          <Field className={style.email} type="email" placeholder="Email" name="email" />

          <ErrorMessage name="email" component="div" />

          <MyTextArea
            name="messg"
            className={style.messg}
            rows="3"
            placeholder="Your thoughts for Us..."/>

          <ErrorMessage name="messg" component="div" />

          <button type="submit" className={style.submitbutton} disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
    </div>
    </div>
    </div>
  )
}