/* eslint-disable comma-dangle */
import './ProfileConfig.scss';
import React, { useState } from 'react';
import PersonCard from '../../components/PersonCard';

const initialData = [
  {
    id: 1,
    name: 'Fabian Mendoza',
    role: 'Administrator',
    birthday: '1996-06-19',
    streetAddress: '123 Main St',
    cityState: 'New York, NY',
    zip: '10001',
  },
];

const ProfileConfig = () => {
  const [data, setData] = useState(initialData);
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
    <div className="ProfileConfig__container">
      <div>
        <PersonCard
          img="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          btn2="Hotels"
          className="PersonCard"
        />
      </div>
      <div className="ProfileConfig__container--table-form">
        <div className="ProfileConfig__container--infoTable">
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
                          <b>Role</b>
                        </th>
                        <th>{item.role}</th>
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
              className="ProfileConfig__container--buttonEditar"
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
          <div className="ProfileConfig__container--form">
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
              <label htmlFor="role">
                Role:
                <input
                  id="role"
                  type="text"
                  name="role"
                  value={formData.role || ''}
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

export default ProfileConfig;
