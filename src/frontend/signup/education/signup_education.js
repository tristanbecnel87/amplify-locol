import React from "react";
import styled from "styled-components";

import "./signup_education.css";
import leftArrow from "./leftArrow.png";
import rightArrow from "./rightArrow.png";
import { Autocomplete, TextField } from "@mui/material";

// export const Signup_education = ({}) => {
  function Signup_education() {
    // const search = document.getElementById('search');
    // const matchList = document.getElementById('match-list');

    // const searchStates = async searchText => {
    // // async function getMajor() {
    //   const res = await fetch('../majors.json');
    //   const majors = await res.json();

    //   // console.log(majors);
    //   // let matches = majors.filter(state => {
    //   //   const regex = new RegExp(`^${searchText}`, 'gi');
    //   //   return state.name.match(regex) || state.abbreviation.match()
    //   // });
    //   console.log(majors);
    // }

    // search.addEventListener('input', () => searchStates(search.value));

    return (
      <div id = "studenteducationRootRootRoot">
      <div id = "background">
        <div id = "panel">
          <div style={{display: 'flex', flexDirection: "row"}}>
            <div style={{ flex:1 }}>
              <a href = "/signup_account">
                <Arrows1 src={rightArrow} />
              </a>
            </div>
            <div style={{ flex:1 }}>
              <text1>Education</text1>
            </div>
            <div style={{ flex:1 }}>
              <a href = "/signup_about_you">
                <Arrows2 src={leftArrow} />
              </a>
            </div>
          </div>
          <text2>What university do you attend?</text2>
          <input type="text" id="ip2"/>
          {/* <TextField
            required
            label="Type here..." 
            inputProps={{
              style: {
                width: "280px",
                borderRadius: '20px',
              },
            }}
            /> */}
          <text3>What do you study?</text3>
          {/* <TextField
            required 
            label="Type here..."
            id="search"
            /> */}
            <input type="text" id="ip2"/>
            <div id="match-list"></div>
            <script src="majors.js"></script>
          <text4>What is your classification</text4>
          <input type="text" id="ip2"/>
          {/* <TextField
            required 
            label="Select a classification"/> */}
          <text6>When do you graduate?</text6>
          <input type="text" id="ip2"/>
          {/* <TextField
            required 
            label="Enter a graduation date"/> */}
        </div>
      </div>
      </div>

        // <StudentsignupRootRootRoot>
        //     <Background>
        //         <Panel>
        //             <Group>
        //                 <Text1>Education</Text1>
        //                 <Arrows src={`https://file.rendit.io/n/pbXXVrmkxAzNUVaqDo1Q.svg`} />
        //             </Group>
        //             <Text2>What university do you attend?</Text2>
        //             <Dropshadow>
        //                 <TypeHere>Type here . . . </TypeHere>
        //             </Dropshadow>
        //             <Text3>What do you study?</Text3>
        //             <Dropshadow>
        //                 <TypeHere>Type here . . . </TypeHere>
        //             </Dropshadow>
        //             <Text4>What is your classification</Text4>
        //             <FlexColumn2>
        //                 <Text5>Select a classification</Text5>
        //             </FlexColumn2>
        //             <Text6>When do you graduate?</Text6>
        //             <FlexColumn3>
        //                 <Text7>Enter graduation date</Text7>
        //             </FlexColumn3>
        //         </Panel>
        //     </Background>
        //     <Image1 src={`undefined`} />
        // </StudentsignupRootRootRoot>
    );
};

export default Signup_education;

const Dropshadow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  align-items: flex-start;
  margin: 0px 0px 20.5px 0px;
  padding: 13px 316px 12.5px 28px;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const TypeHere = styled.div`
  width: 72px;
  height: 13px;
  color: rgba(0, 0, 0, 0.3);
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
`;
const StudentsignupRootRootRoot = styled.div`
  background-color: #ffffff;
  overflow: hidden;
`;
const Background = styled.div`
  height: 668px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13.13% 27.5% 13.13% 27.43%;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/4eqxKUac0wAhTiG8QL6c.svg");
`;
const Panel = styled.div`
  height: 487px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6.16% 7.74% 6.16% 7.9%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Group = styled.div`
  width: 100.09%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 4.75% 0px;
  padding: 1.87% 0px 1.48% 0px;
`;
const Text1 = styled.div`
  width: 24.47%;
  height: 32px;
  left: 64.8px;
  top: 0px;
  position: absolute;
  color: #262626;
  font-size: 25px;
  font-weight: 700;
  font-family: Montserrat;
  line-height: 31.725001335144043px;
  text-align: center;
  white-space: nowrap;
`;
const Arrows1 = styled.img`
  width: 100.09%;
  height: 13.6px;
  position: relative;
`;
const Arrows2 = styled.img`
  width: 100.09%;
  height: 13.6px;
  position: relative;
  left: 350px;
`;
const Text2 = styled.div`
  width: 44.57%;
  height: 18px;
  margin: 0px 0px 2.37% 11.83%;
  font-size: 15px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const Text3 = styled.div`
  width: 28.68%;
  height: 18px;
  margin: 0px 0px 2.37% 11.83%;
  font-size: 15px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const Text4 = styled.div`
  width: 37.08%;
  height: 18px;
  margin: 0px 0px 2.37% 11.83%;
  font-size: 15px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  align-items: flex-start;
  margin: 0px 0px 3.75% 0px;
  padding: 2.37% 48.58% 2.28% 5.11%;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const Text5 = styled.div`
  width: 100%;
  height: 13px;
  color: rgba(0, 0, 0, 0.3);
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
  white-space: nowrap;
`;
const Text6 = styled.div`
  width: 34.16%;
  height: 18px;
  margin: 0px 0px 2.37% 11.83%;
  font-size: 15px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const FlexColumn3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  align-items: flex-start;
  padding: 2.37% 47.67% 2.28% 5.11%;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #bdbdbd;
  box-shadow: 0px 5px 25px 0px #02375f;
`;
const Text7 = styled.div`
  width: 100%;
  height: 13px;
  color: rgba(0, 0, 0, 0.3);
  font-size: 11px;
  font-weight: 500;
  font-family: Montserrat;
  white-space: nowrap;
`;
const Image1 = styled.img`
  height: 0px;
`;
