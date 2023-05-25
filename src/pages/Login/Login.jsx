import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col justify-center lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="pb-4 text-5xl font-bold">Login now!</h1>
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="card w-[340px] flex-shrink-0 bg-base-100 shadow-2xl">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
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
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Invalid password',
                      },
                    })}
                    type="password"
                    placeholder="password"
                    className="input-bordered input"
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
                <div className="form-control mt-6">
                  <button className="btn-primary btn">Login</button>
                </div>
              </div>
            </div>
          </form>
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/register" className=" text-blue-700 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
