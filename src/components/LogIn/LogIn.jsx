import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const LogIn = () => {

    const { signIn } = useContext(AuthContext)

    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const info = {email, password}
        console.log(info);
        signIn(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            
            Swal.fire({
                title: 'Oops...',
                text: 'Something went wrong!',
                icon: "error",
                confirmButtonText: 'Try again'
              });
            console.log(error);
        })

    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <span>Don&apos;t have an account? <Link className="text-blue-500" to='/register'>Register Now!</Link> </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;