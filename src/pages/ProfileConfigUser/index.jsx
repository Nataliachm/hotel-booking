/* eslint-disable comma-dangle */
import React, { useEffect, useContext } from 'react';
import PersonCard from '../../components/PersonCard';
import { AppContext } from '../../store/AppContext';
import './ProfileConfigUser.scss';

// const initialDataUser = [
//   {
//     id: 1,
//     name: 'Pedro Perez',
//     gender: 'Male',
//     birthday: '1990-06-19',
//     streetAddress: '123 Main St',
//     cityState: 'New York, NY',
//     zip: '10001',
//   },
// ];

const ProfileConfigUser = () => {
  // const [userData, setUserData] = useState(initialDataUser);
  // const [userEditId, setUserEditId] = useState(null);
  // const [formUserData, setFormUserData] = useState({});

  const store = useContext(AppContext);
  const {
    userData,
    userEditId,
    formUserData,
    handleUserEdit,
    handleInputUserChange,
    handleInfoUserSave,
    // setUserData,
    handleGetUser,
    email
  } = store;

  const emptyFields = '--------';
  // useEffect(() => {
  //   // Definir una función asíncrona dentro de useEffect
  //   async function fetchData() {
  //     try {
  //       // Simular una llamada a una API o alguna operación asíncrona
  //       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }
  // });

  useEffect(() => {
    // Definir una función asíncrona dentro de useEffect
    handleGetUser();
    // setUserData(initialDataUser);
  }, []);
  // const handleUserEdit = (id) => {
  //   setUserEditId(id);
  //   setFormUserData(
  //     userData.find((item) => {
  //       return item.id === id;
  //     })
  //   );
  // };

  // const handleInputUserChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormUserData(
  //     {
  //       ...formUserData,
  //       [name]: value,
  //     }
  //   );
  // };

  // const handleInfoUserSave = () => {
  //   const newUserData = userData.map((item) => {
  //     return item.id === userEditId ? { ...item, ...formUserData } : item;
  //   });
  //   setUserData([...newUserData]);
  //   setUserEditId(null);
  //   setFormUserData({});
  // };

  return (
    <div className="ProfileConfigUser__container">
      <div>
        <PersonCard
          img="https://icon-library.com/images/persona-icon/persona-icon-25.jpg"
          btn2="Hotels"
          userName={userData[0].user_name}
          className="PersonCard"
        />
      </div>
      <div className="ProfileConfigUser__container--table-form">
        <div className="ProfileConfigUser__container--infoTable">
          <div>
            <h2>Personal Information</h2>
          </div>
          <div>
            <table>
              <tbody>
                {userData.map((item) => {
                  return (
                    <>
                      <tr>
                        <th>
                          <b>Name</b>
                        </th>
                        <th>{item.user_name || emptyFields}</th>
                      </tr>
                      <tr>
                        <th>
                          <b>Gender</b>
                        </th>
                        <th>{item.gender || emptyFields}</th>
                      </tr>
                      <tr>
                        <th>
                          <b>Birthday</b>
                        </th>
                        <th>{item.birthday || emptyFields}</th>
                      </tr>
                      <tr>
                        <th>
                          <b>Street Address</b>
                        </th>
                        <th>{item.address || emptyFields}</th>
                      </tr>
                      <tr>
                        <th>
                          <b>City/State</b>
                        </th>
                        <th>{item.name_city || emptyFields}</th>
                      </tr>
                      <tr>
                        <th>
                          <b>Zip</b>
                        </th>
                        <th>{item.postal_code || emptyFields}</th>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div />
          <div>
            <button
              className="ProfileConfigUser__container--buttonEditar"
              type="button"
              onClick={() => {
                return handleUserEdit(email || localStorage.getItem('email'));
              }}
            >
              Editar
            </button>
          </div>
        </div>
        {userEditId !== null && (
          <div className="ProfileConfigUser__container--form">
            <div>
              <label htmlFor="name">
                Name:
                <input
                  id="name"
                  type="text"
                  name="user_name"
                  value={formUserData.user_name}
                  onChange={handleInputUserChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="gender">
                Gender:
                <input
                  id="gender"
                  type="text"
                  name="gender"
                  value={formUserData.gender}
                  onChange={handleInputUserChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="birthday">
                Birthday:
                <input
                  id="birthday"
                  type="date"
                  name="birthday"
                  value={formUserData.birthday}
                  onChange={handleInputUserChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="address">
                Street Address:
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={formUserData.address}
                  onChange={handleInputUserChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="city">
                City/State:
                <input
                  id="city"
                  type="text"
                  name="name_city"
                  value={formUserData.name_city}
                  onChange={handleInputUserChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="zip">
                Zip:
                <input
                  id="zip"
                  type="text"
                  name="postal_code"
                  value={formUserData.postal_code}
                  onChange={handleInputUserChange}
                />
              </label>
            </div>
            <div>
              <button type="button" onClick={handleInfoUserSave}>
                Guardar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileConfigUser;
