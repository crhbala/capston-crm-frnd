import React, { useEffect, useState } from "react";
import CustomTable from "../../../components/CustomTable";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { userApi } from "../../../service/api/user/userApi";
import useGetuserData from "../../../Hooks/useGetuserData";
import { convertDateToDateWithoutTime } from "../../../utils/calendarHelpers";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = useGetuserData();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Check if user.id is available before making the API call
        if (user.user && user.user.id) {
          const response = await userApi.getTickets(user.user.id);
          console.log(response, "response");
          setTickets(response.data.message);
          setLoading(false);
        } else {
          // Handle the case when user.id is not available
          console.error("User ID is not available.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
        setLoading(false);
      }
    };

    fetchTickets();
  }, []); // The dependency array now includes user, so it runs whenever user changes

  // const [tickets] = useState([
  //   {
  //     createdAt: "2022-02-28T13:59:06.873Z",
  //     name: "Miss Dennis Hauck",
  //     email: "Lane.Friesen20@gmail.com",
  //     phoneNo: "521-272-6958",
  //     company: "Rippin Inc",
  //     lastActivity: "2021-09-30T12:24:31.084Z",
  //     leadStatus: "leadStatus 1",
  //     id: "1",
  //   },
  //   {
  //     createdAt: "2022-02-28T14:41:26.612Z",
  //     name: "Miss Rosalie Roob",
  //     email: "Sydney.Kreiger@yahoo.com",
  //     phoneNo: "(769) 607-0756 x2384",
  //     company: "Gottlieb, Grady and Walter",
  //     lastActivity: "2021-08-02T20:02:08.044Z",
  //     leadStatus: "leadStatus 2",
  //     id: "2",
  //   },
  //   {
  //     createdAt: "2022-02-27T17:56:52.394Z",
  //     name: "Della Hilpert V",
  //     email: "Nathen21@hotmail.com",
  //     phoneNo: "629-247-9024",
  //     company: "Roberts - Robel",
  //     lastActivity: "2021-07-16T14:33:29.290Z",
  //     leadStatus: "leadStatus 3",
  //     id: "3",
  //   },
  //   {
  //     createdAt: "2022-02-27T22:52:48.297Z",
  //     name: "Terence Ward",
  //     email: "Rebeka.Reynolds@hotmail.com",
  //     phoneNo: "217-274-6983",
  //     company: "Heathcote - Auer",
  //     lastActivity: "2021-11-19T09:19:35.469Z",
  //     leadStatus: "leadStatus 4",
  //     id: "4",
  //   },
  //   {
  //     createdAt: "2022-02-28T06:08:12.734Z",
  //     name: "Lorena Mitchell",
  //     email: "Adolfo.Jacobs@yahoo.com",
  //     phoneNo: "397.701.5266 x48198",
  //     company: "Kreiger LLC",
  //     lastActivity: "2021-11-16T11:11:28.863Z",
  //     leadStatus: "leadStatus 5",
  //     id: "5",
  //   },
  //   {
  //     createdAt: "2022-02-28T15:33:16.064Z",
  //     name: "Jody Mayert",
  //     email: "Zelma_Wilkinson68@yahoo.com",
  //     phoneNo: "1-398-281-5304 x426",
  //     company: "Nader, Walter and Kunde",
  //     lastActivity: "2021-11-13T18:36:28.098Z",
  //     leadStatus: "leadStatus 6",
  //     id: "6",
  //   },
  //   {
  //     createdAt: "2022-02-28T06:38:57.922Z",
  //     name: "Lena Hilpert DDS",
  //     email: "Jada.Murphy56@yahoo.com",
  //     phoneNo: "(398) 351-5911 x76762",
  //     company: "Brakus, Hoeger and Lang",
  //     lastActivity: "2021-10-01T13:13:49.610Z",
  //     leadStatus: "leadStatus 7",
  //     id: "7",
  //   },
  //   {
  //     createdAt: "2022-02-28T03:45:50.263Z",
  //     name: "Penny McCullough",
  //     email: "Karlee.Schmidt59@gmail.com",
  //     phoneNo: "843-578-7090 x582",
  //     company: "Raynor Inc",
  //     lastActivity: "2021-12-05T10:59:29.417Z",
  //     leadStatus: "leadStatus 8",
  //     id: "8",
  //   },
  //   {
  //     createdAt: "2022-02-28T07:29:39.870Z",
  //     name: "Israel Lockman",
  //     email: "Ardella_Crist@yahoo.com",
  //     phoneNo: "(799) 513-4416",
  //     company: "Graham, Mante and O'Conner",
  //     lastActivity: "2021-07-25T23:13:54.428Z",
  //     leadStatus: "leadStatus 9",
  //     id: "9",
  //   },
  //   {
  //     createdAt: "2022-02-28T11:34:50.557Z",
  //     name: "Glenda Beer",
  //     email: "Kamron_Lindgren@hotmail.com",
  //     phoneNo: "821-617-9144",
  //     company: "Ledner, Schuster and Bergstrom",
  //     lastActivity: "2022-01-04T07:37:26.060Z",
  //     leadStatus: "leadStatus 10",
  //     id: "10",
  //   },
  // ]);

  const columns = [
    {
      label: "title",
      name: "title",
    },
    {
      label: "desc",
      name: "desc",
    },
    {
      label: "category",
      name: "category",
    },
    { label: "Status", name: "status" },
    { label: "priority", name: "priority" },
    {
      label: "Created At",
      name: "date",
      options: {
        customBodyRender: (data) => (
          <span>{convertDateToDateWithoutTime(data)}</span>
        ),
      },
    },
    {
      name: "_id",
      label: "Actions",
      options: {
        customBodyRender: (tableMeta) => (
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              navigate(`/user-dashboard/tickets/${tableMeta}`);
            }}
          >
            View
          </Button>
        ),
      },
    },
  ];
  return (
    <React.Fragment>
      <Link to="add-tickets">
        <Button variant="contained" sx={{ marginLeft: "auto" }}>
          <AddIcon /> Add Tickets
        </Button>
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CustomTable columns={columns} data={tickets} title="Tickets" />
      )}
      <Button
        sx={{
          marginTop: 2,
        }}
        onClick={() => {
          navigate("/user-dashboard");
        }}
      >
        Back
      </Button>
    </React.Fragment>
  );
};

export default Tickets;
