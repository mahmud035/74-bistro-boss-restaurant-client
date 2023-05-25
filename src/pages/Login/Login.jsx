import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from 'react-simple-captcha';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location?.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      captcha: '',
    },
  });

  // NOTE: load captcha inside useEffect()
  useEffect(() => {
    {
      loadCaptchaEnginge(6, 'white', 'black');
    }
  }, []);

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    const captcha = data.captcha;
    console.log(email, password, captcha);

    if (validateCaptcha(captcha, false) !== true) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Captcha didn't match! Try again.`,
      });

      return;
    }

    //* 2. sign in
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: 'success',
          title: `Logged in successfully`,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: `${error.message}`,
        });
      });
  };

  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col justify-center lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="pb-4 text-5xl font-bold">Login now!</h1>
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="card w-[340px] flex-shrink-0 bg-base-100 shadow-2xl">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email*</span>
                  </label>
                  <input
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Email is required',
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email format',
                      },
                    })}
                    type="email"
                    placeholder="Email"
                    className="input-bordered input"
                  />

                  {errors?.email && (
                    <span className="mb-3- mt-2 text-red-500">
                      {errors?.email?.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password*</span>
                  </label>
                  <input
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Invalid password',
                      },
                    })}
                    type="password"
                    placeholder="Password"
                    className="input-bordered input "
                  />
                  <label className="label">
                    <a href="#" className="link-hover label-text-alt link">
                      Forgot password?
                    </a>
                  </label>

                  {errors?.password && (
                    <span className="mb-3 text-red-500">
                      {errors?.password?.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <div className="flex rounded-lg border-2">
                    <LoadCanvasTemplate />
                  </div>
                  <input
                    {...register('captcha', {
                      required: {
                        value: true,
                        message: `Captcha didn't match`,
                      },
                    })}
                    type="text"
                    placeholder="Type captcha here"
                    className="input-bordered input mt-3"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn border-0 bg-yellow-600 capitalize">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
          <p className="text-sm text-yellow-400">
            New here?{' '}
            <Link to="/register" className=" font-bold text-yellow-500">
              Create a New Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
