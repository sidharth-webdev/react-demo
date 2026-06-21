import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export function FormikComponent(){
    return (
        <div className="container-fluid">
            <h3>Register Product</h3>
            <Formik initialValues={{ProductId:0, Name:'', Mobile:''}} validationSchema={yup.object({
             ProductId: yup.number().required('Product Id Required').min(1, 'Product Id Cant be Zero'),
             Name: yup.string().required('Name Required').min(4, 'Name too short').max(10, 'Name too long'),
             Mobile: yup.string().required('Mobile Required').matches(/\+91\d{10}/,'Invalid Mobile')
            })} onSubmit={(product)=>{console.log(product)}} >
                {
                 form => <Form>
                    <dl>
                        <dt>Product Id</dt>
                        <dd> <Field type="number" name="ProductId" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="ProductId" /> </dd>
                        <dt>Name</dt>
                        <dd> <Field type="text" name="Name" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="Name" /> </dd>
                        <dd>Mobile</dd>
                        <dd> <Field type="text" name="Mobile" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="Mobile" /> </dd>
                    </dl>
                    <button className="me-2" disabled={!form.isValid} type="submit">Register</button>
                    <button className={(form.dirty)?'d-inline':'d-none'} >Save</button>
                    <div className={(form.isValid)?'d-none':'d-block'}>
                    <h4>Please Check the following Errors</h4>
                    {
                        Object.keys(form.errors).map(property=> <li>{form.errors[property]}</li>)
                    }
                    </div>
                </Form>
                }
            </Formik>
        </div>
    )
}                     