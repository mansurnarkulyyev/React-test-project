// import React from 'react';
// // import st from
// const RegisterView = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleChange = ({ target: { name, value } }) => {

//         switch (name) {
//             case
//                 'email':
//                 return setEmail(value);
//             case 'password':
//                 return setPassword(value);
//             default:
//                 return;
//         }
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         dispatch(authOperations.logIn({ email, password }));
//         setEmail('');
//         setPassword('');
//     }
//     return (
//         <div>


//             <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
//                 <label style={styles.label}>
//                     pochta
//                     <input
//                         type="email"
//                         name="email"
//                         value={email}
//                         onchange={handleChange} />
//                 </label>
//             </form>
//         </div>)
// }
    
//     export default RegisterView;