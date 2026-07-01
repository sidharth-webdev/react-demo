import { useForm } from "react-hook-form";
import { Navbar } from "../../controlled-components/navbar";

export function HookFormDemo(){

    const {register, handleSubmit, formState:{errors}} = useForm();

    const submit = (values)=> {
        console.log(values);
    }

    return(
        <div className="container-fluid">
            <header className="mt-4">
                <Navbar theme="bg-danger text-white" title="Shopper." menuItems={['Home', 'Shop', 'Catalog', 'Blog', 'Docs']} shortcuts={['bi bi-person', 'bi bi-cart4']} />
            </header>
            <section>
                <Navbar theme="bg-primary text-white" title="Naresh IT" menuItems={['Home','course','Ofers']} shortcuts={['bi bi-heart','bi bi-person-fill','bi bi-bell','bi bi-facebook']}/> 
            </section>
            <h2>Register User</h2>
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" {...register("UserName",{required:true, minLength:4})} /></dd>
                    <dd className="text-danger">
                        {
                            (errors.UserName?.type==="required")?<span>User Name Required</span>:<span></span> && (errors.UserName?.type==="minLength")?<span>Name too short</span>:<span></span>
                        }
                    </dd>
                    <dt>Mobile</dt>
                    <dd>
                        <input type="text" name="Mobile" {...register("Mobile", {required:true, pattern:/\+91\d{10}/})} />
                    </dd>
                    <dd className="text-danger">
                        {
                            (errors.Mobile?.type==="required")?<span>Mobile Required</span>:<span></span> && (errors.Mobile?.type==="pattern")?<span>Invalid Mobile</span>:<span></span>

                        }
                    </dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}            