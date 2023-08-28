/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import { PersonCard } from '../../components/PersonCard';
// import { AppContext } from '../../store/AppContext';
import './ProfileConfigUser.scss';

const initialDataUser = [
  {
    id: 1,
    name: 'Pedro Perez',
    gender: 'Male',
    birthday: '1990-06-19',
    streetAddress: '123 Main St',
    cityState: 'New York, NY',
    zip: '10001',
  },
];

const ProfileConfigUser = () => {
  // const store = useContext(AppContext);
  // const { email } = store;
  const [data, setData] = useState(initialDataUser);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEdit = (id) => {
    setEditId(id);
    setFormData(
      data.find((item) => {
        return item.id === id;
      })
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSave = () => {
    setData((prevData) => {
      return prevData.map((item) => {
        return item.id === editId ? { ...item, ...formData } : item;
      });
    });
    setEditId(null);
    setFormData({});
  };

  return (
    <div className="ProfileConfigUser__container">
      <div>
        <PersonCard
          img="https://icon-library.com/images/persona-icon/persona-icon-25.jpg"
          btn2="Hotels"
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
                {data.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <tr>
                        <th>
                          <b>Name</b>
                        </th>
                        <th>{item.name}</th>
                      </tr>
                      <tr>
                        <th>
                          <b>Gender</b>
                        </th>
                        <th>{item.gender}</th>
                      </tr>
                      <tr>
                        <th>
                          <b>Birthday</b>
                        </th>
                        <th>{item.birthday}</th>
                      </tr>
                      <tr>
                        <th>
                          <b>Street Address</b>
                        </th>
                        <th>{item.streetAddress}</th>
                      </tr>
                      <tr>
                        <th>
                          <b>City/State</b>
                        </th>
                        <th>{item.cityState}</th>
                      </tr>
                      <tr>
                        <th>
                          <b>Zip</b>
                        </th>
                        <th>{item.zip}</th>
                      </tr>
                    </React.Fragment>
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
                return handleEdit(data[0].id);
              }}
            >
              Editar
            </button>
          </div>
        </div>
        {editId !== null && (
          <div className="ProfileConfigUser__container--form">
            <div>
              <label htmlFor="name">
                Name:
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name || ''}
                  onChange={handleInputChange}
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
                  value={formData.gender || ''}
                  onChange={handleInputChange}
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
                  value={formData.birthday || ''}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="address">
                Street Address:
                <input
                  id="address"
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress || ''}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="city">
                City/State:
                <input
                  id="city"
                  type="text"
                  name="cityState"
                  value={formData.cityState || ''}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="zip">
                Zip:
                <input
                  id="zip"
                  type="text"
                  name="zip"
                  value={formData.zip || ''}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <button type="button" onClick={handleSave}>
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
