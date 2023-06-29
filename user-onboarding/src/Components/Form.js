import React from "react";


const Form = (props) => {
    const {change, submit, errors } = props
    const {username, email, password, tos} = props.values;

    const onChange = (evt) => {
        const {name, value, checked, type} = evt.target;
        const newValue = type === 'checkbox' ? checked : value;
        change(name, newValue);
    }
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    return (
        <div>
            <h1>hello</h1>
            <p>{errors.username}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.tos}</p>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label>Password
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Survice:
                    <input 
                        type="checkbox"
                        name="tos"
                        checked={tos}
                        onChange={onChange}
                    />
                </label>
                <input type='submit' value='Creat a friend!' />
            </form>
        </div>
    )
}

export default Form;