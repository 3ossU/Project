import { useEffect, useState } from "react";
import AdminNavbar from "../componants/adminnavbar";
import { fetchUsers } from "../Data/UserData";
import { Table, InputGroup, Form, Button } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sellerlist = () => {
  const [usersRaw, setUsersRaw] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState(""); //  เก็บข้อความที่พิมพ์

  useEffect(() => {
    const data = fetchUsers();
    setUsersRaw(data);
  }, []);

  useEffect(() => {
    setUsers(usersRaw);
  }, [usersRaw]);

  //  ฟังก์ชันเมื่อกดปุ่มค้นหา
  const handleSearch = () => {
    if (searchText.trim() === "") {
      // ถ้าช่องว่าง แสดงทั้งหมด
      setUsers(usersRaw);
    } else {
      const filtered = usersRaw.filter((user) => {
        // ค้นหาด้วยชื่อ หรือ id (ไม่สนตัวพิมพ์ใหญ่เล็ก)
        const text = searchText.toLowerCase();
        return (
          user.name.toLowerCase().includes(text) ||
          user.userId?.toLowerCase().includes(text) ||
          user.id.toString().includes(text)
        );
      });
      setUsers(filtered);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between w-75 m-auto mt-5">
        <div>
          <h1>Userlist</h1>
        </div>

        {/* 🔍 searchbar */}
        <div>
          <InputGroup
            className="rounded-pill border border-dark"
            style={{
              width: "600px",
              position: "relative",
            }}
          >
            <Form.Control
              placeholder="Username, UserId"
              className="border-0 rounded-pill"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)} // พิมพ์แล้วอัปเดตค่า
              style={{
                boxShadow: "none",
                paddingLeft: "20px",
                paddingRight: "40px",
              }}
            />
            <Button
              variant="light"
              className="border-0 position-absolute end-0 me-2 bg-transparent"
              style={{ zIndex: 10 }}
              onClick={handleSearch} //  กดแล้วค้นหา
            >
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </div>
      </div>
      {/* search bar end */}

      {/* Container */}
      <div className="w-75 m-auto">
        {/* Table */}
        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th style={{ width: "3rem" }}>ID</th>
              <th>Username</th>
              <th style={{ width: "6rem" }}>Role</th>
              <th style={{ width: "8rem" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="text-center">{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>
                    <Button variant="warning">
                      Inspect <i className="bi bi-search"></i>
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  ไม่พบผู้ใช้ที่ตรงกับคำค้นหา
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Sellerlist;
