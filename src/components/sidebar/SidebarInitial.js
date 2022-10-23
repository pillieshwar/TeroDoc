import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarItems } from "./SidebarItems";
// import FileUploadIcon from "@mui/icons-material/FileUpload";

export function Sidebar(props, { defaultActive }) {
  const location = props.history.location;
  // const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  // const lastActiveIndex = Number(lastActiveIndexString);
  // const [activeIndex, setActiveIndex] = useState(            //do not delete
  //   lastActiveIndex || defaultActive
  // );

  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex);
    // setActiveIndex(newIndex);
  }

  function getPath(path) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  useEffect(() => {
    const activeItem = SidebarItems.findIndex(
      (item) => getPath(item.route) === getPath(location.pathname)
    );
    changeActiveIndex(activeItem);
  }, [location]);

  return (
    <>
      <SidebarParent>
        <div
          style={{
            marginTop: "1%",
            height: "100vh",
            fontSize: "0.1 em",
            position: "fixed",
            backgroundColor: "white",
          }}
        >
          {/* <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <DashboardCustomizeRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                style={{
                  marginLeft: "-14px",
                  fontSize: "unset",
                  color: "#000",
                }}
                primary="Dashboard"
              />
            </ListItemButton>
          </Link>
          <Link to="/sop">
            <ListItemButton>
              <ListItemIcon>
                <ArticleRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                style={{
                  marginLeft: "-14px",
                  fontSize: "unset",
                  color: "#000",
                }}
                primary="Statement of Purpose"
              />
            </ListItemButton>
          </Link>
          <Link to="/page-2">
            <ListItemButton>
              <ListItemIcon>
                <RateReviewRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                style={{
                  marginLeft: "-14px",
                  fontSize: "unset",
                  color: "#000",
                }}
                primary="Review Request"
              />
            </ListItemButton>
          </Link> */}
          <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <RateReviewRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                style={{
                  marginLeft: "-14px",
                  fontSize: "unset",
                  color: "#000",
                }}
                primary="Sop Consent"
              />
            </ListItemButton>
          </Link>
          {/* <Link to="/upload">
            <ListItemButton>
              <ListItemIcon>
                <FileUploadIcon color="info" />
              </ListItemIcon>
              <ListItemText
                style={{
                  marginLeft: "-14px",
                  fontSize: "unset",
                  color: "#000",
                }}
                primary="Upload"
              />
            </ListItemButton>
          </Link> */}
        </div>
        <div className="behind-the-scenes" />
      </SidebarParent>
      {/* <SidebarParent>
        <div style={{ marginTop: "5%", fontSize: "0.1 em", position: "fixed" }}>
          {SidebarItems.map((item, index) => {
            return (
              <Link to={item.route}>
                <SidebarItem
                  style={{ color: "#000", margin: "0%", padding: "0%" }}
                  key={item.name}
                  active={index === activeIndex}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText
                      style={{
                        marginLeft: "-14px",
                        // fontStyle: "italic",
                        fontSize: "unset",
                      }}
                      primary={item.name}
                    />
                  </ListItemButton>
                </SidebarItem>
              </Link>
            );
          })}
        </div>
        <div className="behind-the-scenes" />
      </SidebarParent> */}
    </>
  );
}

const SidebarParent = styled.div`
  background: rgb(254, 254, 255);

  a {
    text-decoration: none;
  }

  & > div {
    width: 270px;
    z-index: 100;
  }

  .behind-the-scenes {
    width: 250px;
  }
`;

// const SidebarItem = styled.div`            //do not delete
//   padding: 3px 24px 3px 1px;
//   transition: all 0.25s ease-in-out;
//   background: ${(props) => (props.active ? "#8FB6E7" : "")};
//   color: "white";
//   margin: 2px 12px;
//   border-radius: 4px;

//   p {
//     color: white;
//     // font-weight: bold;
//     text-decoration: none;
//   }

//   &:hover {
//     cursor: pointer;
//   }

//   &:hover:not(:first-child) {
//     background: #c34a36;
//   }
// `;
