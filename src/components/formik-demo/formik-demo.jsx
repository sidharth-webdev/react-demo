import { useFormik } from "formik";
import * as yup from "yup";

export function FormikDemo(){

    
    const formik = useFormik({
         initialValues: {
             ProductId: 0,
             Name: '',
             Stock: false,
             City: 'Select City',
             Mobile: ''
         },
         validationSchema:yup.object({
             ProductId: yup.number().required('Product Id Required').min(1, 'Product Id Cant be Zero'),
             Name: yup.string().required('Name Required').min(4, 'Name too short').max(10, 'Name too long'),
             Mobile: yup.string().required('Mobile Required').matches(/\+91\d{10}/,'Invalid Mobile')
         }),
         onSubmit: (product)=>{ 
            console.log(product);
         }
    });

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
            <h2>Register Product</h2>
            <dl>
                <dt>Product Id</dt>
                <dd><input type="number" {...formik.getFieldProps('ProductId')} name="ProductId" /></dd>
                <dd className="text-danger">{formik.errors.ProductId}</dd>
                <dt>Name</dt>
                <dd><input type="text" name="Name" onChange={formik.handleChange} /></dd>
                <dd className="text-danger">{formik.errors.Name}</dd>
                <dt>Stock</dt>
                <dd><input type="checkbox" onChange={formik.handleChange} name="Stock"/> Available </dd>
                <dt>City</dt>
                <dd>
                    <select name="City" onChange={formik.handleChange}>
                        <option>Select City</option>
                        <option>Delhi</option>
                        <option>Hyd</option>
                    </select>
                </dd>
                <dd className="text-danger">{formik.errors.City}</dd>
                <dt>Mobile</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>
                <dd className="text-danger">{formik.errors.Mobile}</dd>
            </dl>
             <button type="submit">Register</button>
            </form>
        </div>
    )
}               