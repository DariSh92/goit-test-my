import styled from '@emotion/styled';
// import background from "../images/background.png";


// // export const List = styled.ul`
// //   display: flex;
// //   justify-content: space-around;
// //   flex-wrap: wrap;
// //   gap: 30px;
// //   padding: 15px;
// // `;

// export const CardDiv= styled.div`
//   width: 380px;
//   height: 460px;
//   margin-right: 20px;
//   background: linear-gradient(
//     114.99deg,
//     #471ca9 -0.99%,
//     #5736a3 54.28%,
//     #4b2a99 78.99%
//   );
//   box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
//   border-radius: 20px;
//   margin: 15px;
// `;

// export const CardStyle = styled.div`
//   background-repeat: no-repeat;
//   background-image: url(${background});
//   background-position: top 28px right 36px;
//   width: 100%;
//   height: 100%;
// `;

// export const LogoImg = styled.img`
//   padding-top: 20px;
//   padding-left: 20px;
// `;

// export const Button = styled.button`
//   margin-left: auto;
//   margin-right: auto;
//   display: block;
//   width: 196px;
//   height: 50px;
//   font-family: 'Montserrat', sans-serif;
//   font-weight: 600;
//   font-size: 18px;
//   line-height: 1.2;
//   text-transform: uppercase;
//   color: #373737;
//   /* background-color: ${props => {
//     return props.isClicked ? '#5CD3A8' : '#EBD8FF';
//   }}; */
//   border: none;
//   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
//   border-radius: 10px;


// `;import styled from 'styled-components';
import background from 'components/images/background.png';

export const Frame = styled.div`
position: relative;
width: 380px;
height: 460px;
margin: 15px auto;
border-radius: 20px;
background-image: url(${background}), linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
background-repeat: no-repeat no-repeat;
background-position: top 28px left 36px, center;
background-size: 308 px 168px cover;
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
` 
export const Logo = styled.img`
margin-top: 20px;
margin-left: 20px;
`
export const Rectangle = styled.img`
position: absolute;
top: 214px;
left: 0;
z-index: -1;
`
// export const Boy = styled.img`
// position: absolute;
// top: 178px;
// left: 150px;
// z-index: 2;
// `
export const Tweets = styled.p`
margin-top: 242px;
text-align: center;
color: #EBD8FF;
`
export const Followers = styled.p`
margin-top: 16px;
margin-bottom: 26px;
text-align: center;
color: #EBD8FF;
`
export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 196px;
  height: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

