import React from 'react'

let arr = [
    { img1: 'https://static2.shine.com/r/m/images/employerbranding/ab28f0af876f42cb96302faaea9e1671.png', img2: 'https://static2.shine.com/r/m/images/employerbranding/8ec12c71c03445248ec99942e16a812c.png' },
    { img1: 'https://static2.shine.com/r/m/images/employerbranding/b076fc83cebb42069205c9a410c9f618.png', img2: 'https://static2.shine.com/r/m/images/employerbranding/9f53b7d4345d41ac9b657b726b6b3349.png' },
    { img1: 'https://static2.shine.com/r/m/images/employerbranding/a307d745fbbe46d3822e5b4e6f3fed55.png', img2: 'https://static2.shine.com/r/m/images/employerbranding/24d6c76bfae84a6f8bd18522f4744b3a.png' },
    { img1: 'https://static2.shine.com/r/m/images/employerbranding/9b944622fc46422786322e57d29a4225.png', img2: 'https://static2.shine.com/r/m/images/employerbranding/666b83a3c4974b4f92613fce536a4251.png' },
    { img1: 'https://static2.shine.com/r/m/images/employerbranding/7f5bc2c5010f4e0fbff014205842ff27.png', img2: 'https://static2.shine.com/r/m/images/employerbranding/700cc0d27c8b416bbfb9c2765652c9cd.png' },
    { img1: 'https://static2.shine.com/r/m/images/employerbranding/e93bc72765914ce481fc7d0611df7536.png', img2: 'https://static2.shine.com/r/m/images/employerbranding/264470edd81541d190bc774a279534aa.png' },
   
]

export default function HomeTopCompanies() {


    return (
        <div style={{display:'flex',gap:'10px', padding:'0px 10%',marginBottom:'50px'}} >
            {
                arr.map((ele) => <div >
                    <img  style={{marginBottom:'10px',boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px"}} src={ele.img1} alt="" />
                    <img  style={{boxShadow:" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}} src={ele.img2} alt="" />
                </div>)
            }
        </div>


    )
}
