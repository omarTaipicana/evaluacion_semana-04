import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form"

const UserForm = ({ addUser, userSelect, updateUser, deselectUser, popUp }) => {

    const { register, handleSubmit, reset } = useForm();

    const submit = (data,) => {
        if (userSelect) {
            updateUser(data)
            onlyClear()
        } else {
            addUser(data)
            clear()
        }

    }
    useEffect(() => {
        if (userSelect) {
            reset(userSelect);
        }
    }, [userSelect]);

    const onlyClear = () => {
        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: ""
        })
    }

    const clear = () => {
        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: ""
        })
        deselectUser()
    }

    const [boolean, setBoolean] = useState(true)
    const hide = () =>  setBoolean(!boolean)

  
    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1>User Form</h1>
            <div className='form-content'>
                <div className='input-content'>
                    <i className="fa-solid fa-user name"></i>
                    <input
                        className='input'
                        placeholder="first name"
                        type="text"
                        {...register("first_name")}
                    />
                    <input
                        className='input'
                        placeholder="last name"
                        type="text"
                        {...register("last_name")}
                    />
                </div>
                <div className='input-content'>
                    <i className="fa-solid fa-envelope"></i>
                    <input
                        className='input email'
                        placeholder="email"
                        type="text"
                        {...register("email")}
                    />
                </div>
                <div className='input-content'>
                    <i className="fa-solid fa-key"></i>
                    <div className='input password'>
                        <input
                            className='input imput-password'
                            placeholder="password"
                            type={boolean ? "password" : "text"}
                            {...register("password")}
                        />
                        <button
                            onClick={hide}
                            type='button'
                            className='hide'>
                            {
                                boolean ?
                                    <i className="fa-sharp fa-solid fa-eye"></i> :
                                    <i className="fa-solid fa-eye-slash"></i>
                            }


                        </button>
                    </div>
                </div>
                <div className='input-content'>
                    <i className="fa-solid fa-cake-candles"></i>
                    <input
                        className='input birthday'
                        placeholder="birthday"
                        type="date"
                        {...register("birthday")}
                    />
                </div>
                <div className='btn-form-content'>
                    <button className='btn-form'>{userSelect ? "Update" : "Submit"}</button>
                    <button className='btn-form' onClick={clear} type='button'>clear</button>
                </div>
            </div>
        </form>
    );
};

export default UserForm;