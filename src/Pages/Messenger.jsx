import "../styles/messenger.css";
import { CiSettings } from "react-icons/ci";
import { FaRegEdit, FaUser } from "react-icons/fa";
import { IoMdNotifications, IoMdSend } from "react-icons/io";
import { RiGroupFill } from "react-icons/ri";
import { FaCircleExclamation } from "react-icons/fa6";
const Messenger = () => {
  return (
    <>
      <div className="main-container">
        <div className="chat-list">
          <div className="list-head">
            <div className="list-head-icoc">
              <CiSettings />
            </div>

            <h2>Messenger</h2>
            <div className="list-head-icoc2">
              <FaRegEdit />
            </div>
          </div>
          <hr />
          <input
            type="text"
            name=""
            className="list-input"
            placeholder="Search for people and group"
          />
          <div className="chats">
            <div className="single-chat">
              <div className="chat-name-img">
                <div>
                  <img
                    className="chat-img"
                    src="https://picsum.photos/50/50"
                    alt=""
                  />
                </div>
                <div>
                  <p className="name">
                    <b>Kausar Ahmad Tasin</b>
                  </p>
                  <p className="last-txt">Ualaikumussalam</p>
                </div>
              </div>
              <div>
                <p className="last-txt">2:30pm</p>
              </div>
            </div>
            <hr className="chat-hr" />
            <div className="single-chat">
              <div className="chat-name-img">
                <div>
                  <img
                    className="chat-img"
                    src="https://picsum.photos/50/50"
                    alt=""
                  />
                </div>
                <div>
                  <p className="name">
                    <b>Wife</b>
                  </p>
                  <p className="last-txt">Assalamualikum</p>
                </div>
              </div>
              <div>
                <p className="last-txt">2:30pm</p>
              </div>
            </div>
            <hr className="chat-hr" />
          </div>
        </div>

        <div className="chating-with">
          <div className="chat-title">
            <div className="name-active-status">
              <div className="chat-with-name">
                <b>Wife</b>
              </div>
              <div className="chat-active-status last-txt">Online</div>
            </div>
            <div className="chat-icons">
              <i id="plus" className="fa-light fa-plus"></i>
              <i className="fa-solid fa-phone"></i>
              <i className="fa-solid fa-video"></i>
              <i className="fa-solid fa-circle-exclamation"></i>
            </div>
          </div>

          <div className="profile-chat-room">
            <div className="chat-room">
              <div className="messege-box">
                <div className="preveous-chat"></div>
                <div className="send-box">
                  <input type="text" placeholder="Type a messenger..." />
                  <div className="send-icon">
                    <IoMdSend />
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-detail">
              <img
                className="profile-detail-img"
                src="https://picsum.photos/100/100"
                alt=""
              />
              <h2>Wife</h2>
              <p className="last-txt">Active</p>
              <div className="profile-detail-icons">
                <div>
                  <IoMdNotifications />
                  <p>Notification</p>
                </div>
                <div>
                  <RiGroupFill />
                  <p>Group</p>
                </div>
                <div>
                  <FaUser />
                  <p>Profile</p>
                </div>

                <div>
                  <FaCircleExclamation />
                  <p>More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
