import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/UserContext';

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const handleRegister = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    // console.log(email, password, name);

    //* 1. create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        //* 3. update user profile
        updateUserProfile(name)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: `Profile name updated`,
            });
            navigate('/');
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: `${error.message}`,
            });
          });
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
            <h1 className="pb-4 text-5xl font-bold">Register Here</h1>
          </div>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="card w-[340px] flex-shrink-0 bg-base-100 shadow-2xl">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Name*</span>
                  </label>
                  <input
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Name is required',
                      },
                    })}
                    type="text"
                    placeholder="Name"
                    className="input-bordered input "
                  />

                  {errors?.password && (
                    <span className="mb-3 text-red-500">
                      {errors?.name?.message}
                    </span>
                  )}
                </div>
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
                        message: 'Password is required',
                      },
                      minLength: {
                        value: 6,
                        message: 'Password should be at least 6 characters',
                      },
                    })}
                    type="password"
                    placeholder="Password"
                    className="input-bordered input "
                  />

                  {errors?.password && (
                    <span className="mb-3 text-red-500">
                      {errors?.password?.message}
                    </span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button className="btn border-0 bg-yellow-600 capitalize">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
          <p className="text-sm text-yellow-400">
            Already registered?{' '}
            <Link to="/login" className=" font-bold text-yellow-500">
              Go to Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
