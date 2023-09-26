import React from "react";
import testSary from "../assets/test.jpeg";
import "./Cards.css";
import cyber from "../assets/cyber.jpg";
import crys from "../assets/crys.png";
import dbz from "../assets/dbz.png";
import far from "../assets/far.png";

import huit from "../assets/huit.svg"
export default function CardTest() {

    const Huit = () => {
        return <svg width={70} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 117 114"><g style={{isolation: 'isolate'}}><g id="Calque_2" data-name="Calque 2"><g id="sss"><image width={117} height={114} opacity="0.25" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAByCAYAAABtAZ4EAAAACXBIWXMAAAsSAAALEgHS3X78AAALrElEQVR4Xu2dYXPiOBOEGza3e/v//+u7d7cEvx/IbJqmRyMRG4zLXaWSLRljzaMeiVRCDtM0Yde2dKwu2PV6eqsueIQOh8OhuuZVNK0g9R2WeoYtgVpKS02A2aDeAXH0+lfUUHDngvxlqA2YFbSqfwuqgmv7vwr3bqgGZnWetY30r1lVIF2/tl2d3wt3GGoBc/RYtVWo3Dd6PAx3CKoAdce9deiVIVbKXNhbXx2PgO2GmgDleuQ4zllbANxKpxOuwfUcc90NtgtqA6iDlhWY49AWgIac0xy4rOg1fJ8usOUPHwzQFsRjR5u7D+sVAWcOzUCd5VzbnCbgwqMC24TaCfRoatfmJgFM/cpSZzknnk19xmX83Baa8BmbLrClUz/k4CrEVmkBhqlfUS2gGUgtATZez8f46G+6FGhAJZdW7ozyragd4K2A7QUa5d3UOu4zLnFyrp1abh1xqhaGGeDe6Pyb9Dm4WkD1K6lKtw4mlyOAEy5jf6f7hntZ9znVuDSOnTujvFH9ZtoUbuXY0Boha2ArhzLMk6lj/Cd42TScubXHqRpw59I3Kn9JzZDVuQoWVOvx2sTBVKgB1DnzROU3bscf4nseqOY+qxuohUsVaKTcgJgVB7eVikOvBLWVch3MAOqgTrjEiO+tQFO3Vk5VB3Ha5DU0oH6n+judK9wWWFD9CnIuzYAGTF6OeNw6OeJ+Rzov3VpBDWVOZaBRfnyU71QzXAbb49a1q3KpAv3vo/C4s/tM+AQacWmmXqAPqgabQfB6Gg79QeVv9INtQV0TZA1qBjUDGuN2DtUJEbGJXXAX2Cuosp5qcBUsb3wCVsD7AeAnPqGye+PamBA9KXitUFupN3a3Dqg6VGFGXBVmiI9v1tWlnPo3lZ/wYN3aqgNYE0yVAlWXhlMVaLiUX8uvecO1S10W63dqQwzUOZXXVU7BP/HpWE7FnIa3CpXTro41Xqdp+oTruMZPmjgFl6qgaoAV7BGfTmW3Mthwa4Dl9VXdqjNy7XLraeZSTrnuutgVv+H686tblppuraCGHNhet3IaVrfqhqkFdQ2QezZJukHijVG8RoHqBHfZC+iMQQuqgtTSWlszsOxW3jDxWuOgdg3mQdKNEhf+yVEGNDZRJ1xcPPIxTwFbt1ZOdYENoFGrWxUsp2PeDX+HH8yrQtX1NHMop2UFqksRp2yNx5fTbyhzKsNVsA6ug6opGLgeiDt/pFzqjVrXU848cY2mWwdUY+omeCkH1d3EpQAu8UAMVtdZB9jtgI/0nlyvSZPU7nNmjIOB6q5fgbolSAuLJ80f9TjVBZXfhFOFrrHs3ACsTs6cmr3vs+TSndskccqMtr9wvbvl+KgzvxyDHqgsfiMF64qutwq5lX75fdYmTb0BlZ+bN07qSpdqs5SbwU31B6r5zXsV9zuwvXBdeZPr3UCq53uE3LqaAT3Dj7UHppvQzfHzjwp7ndoDtAfwN1NrWwwQVK9R7FYG8Q2fLnVja4H8EthQCyrf2PW5tp6SzdTKqWtUOFXPR+Fl423F/4DkY02vU0M6a9xDVQ/OcPnYBQBUr0kazCO1RyoehZm1R1+3RqFW6nnQ3n4d2Jp0wC3Y0fFp/2yaGyqLH7QaUNW2NsU6quodU7QvoiPmUTbbWu2ttjUDBfzzVWPitpH2Yc3h1HsfJAPXG7BnKdLuAZ+O5VT81Ql57+v+aC6nquacjaPXL63R55kzFl1aCqpTawCLDO4JWsUYHwmV9dUUtXY9dXzPgrprQe1QN6gd6ga1Q92gdqgb1A51g9qhblA71A1qh7pB7VA3qB3qBrVD3aB2qBvUDnWD2qEuo0nq7JpW/93aoT5OvQB7r0u1Q51XDkivI3uu6dIO9TnKAM4Cdoe6nCrX9qy7d2mHOr/0b2vcsbZpn6bsqv9KO9Tlpe50Rfv4tawuV+9Q71crjd4DT/u5rxR/jd0OdVwu4JUTo5yL8wx0nHdphzqfeoGecQ3TgWWgCrfUDnVMLrgOgMLk4tq43YFladvNNTvU+9RyYgaNv2cp66+cWwIFdqgjmqTWNgf0nWo97gE8BDP0LKguQGuWPm+PQx3EE26hKuDMne7cao6/T+1VC+Ba4VauZJgO0qkoGeget6ZayqnZQww93IdGr59D+pwOaGvNdEB/J7WCzdIwcP1MqeZwatcbGWUPOuH6r7TdNY9UBdS5k8HFN4Zqzf2ZW51TS2PMARUYd2bV5sA+Sm6SRd1yqHNmBpRrTcctt3ZN7rmgOimkbMZpG0u/T+FRaj17CyaD5PKv1FzYrQ6svv9NrEb/g9SoKnA9/awJz3UqP1MEOGCecQuTgf5blAxsy62hG7CsUahuwD2gXDnLccDTzZt98IWVjUXXUedOhfcPFQdWnapgszinakFt3cC1VxA1MFz0m0qe+Z0Jk9Qc2Ag0p90M6D+NUjn1IWsq3yybxT3w3k3NQOO17utolgDcmrRuPG6XG1AdzF8fRY/ZtbphytbUUAn4D9RpmqbiO397wDqQGgwuR3zCiq9UVecuAdMpCxyPi4GySxXoL1NcGr5ns3Sle/8pLotvPArzRHV8z686NCA7pyJpu0fpLEd7osZYAoCm3QD6Pyq/qFa4DLV3PW09O4A+qO4mOmg3eIbIM5u/Oz7uFa85UvsjncpjzKCOuJRhZkDjdbxzVodmLp0AWJcCHmpcyMHMZkwUXiMVKD90AI17x2vcd+gDt0DnApxN1KgVaoxPP8I4l6pTHVi3UcpSbzP9OvU4leVmcGsm8+AVaEyGgBoudel3LpgqDVLmUs4+bsfr1lKF2dokZZ9Rh10K1FBvbobPwfIszoD+h+t/U6JAn/1vwXqh6vgCRrbjdWspu3QUaLdLgfpz6gH+5tUsZnfGf7JQoG6NzaDCnH9VDmjUbny6nGROrXa/LaAu7bJKlwK1U0PZgNWlLt06h55Q/6OhuSG2NEmtmYjXU+dUXlNdXaXdANty6SxOBa5vxkAZLA/WAdVdblzn/iWYAn0UWB0jj7M1cbMfOmhh+CMuvQFauRSooYYcUDfYN1wemp0Hut4BfTZUDpJCrdZUhhpgGbDCdEBP8l6pO3uAAn1Q9U10sOxS97GEZ3sEJDZIsd4qVOAa6NxwNTjOqTxWnbwxDnaruvZf6fuNa6CccqNm4/AzdQMFBCr9qJBvwHB4sOzU37iFE69h+LwbbqXeR2+Soi3adYmpUrDC1WMFqimX48rPNgwUmM+pzmlxvUu7CrSCurQmU5/hxxqTmPcQDjD3qTs15Tp3DoFk9UAFPNR35DD4ugxoBhV4PFTgNqBuAvNyw46tCsPklMvuPOOiK6CjLgVqqHHDSMnnj+OoT/BA41p2aQ9QdenScDVgmpV0Emsa5jU2qzXdBlRNu6Dzy8kdQAEDVdZVBhV1AAU+wf55OV3DUBlmAI3Pr4/cIDlx4NSt7KIWWFfYmQqT76vveTm5EyhQOxW4dSvPrHdzLbs0YPIayjvkno8xS4F1QePA6gSdcJ06Fa47djAXBQokUAu3BlDVROWMC7z3j/o36pSbQX2UJlO3HKtws/MM5iJAgT6nArezmt0a59+oPWCyMxlmy6HPhhrHrqjjFLID6WAq1MvBDECBBlTjVn7DMy5g1LXxsNF3xGWQDHKNQEMa6AxsC7D2ZxOE32c2oMCYU10a5rYYiHNkT7p9NtBQD1iF62o9hjm+HMwIFAAO1f3kl9EUhhYHL3NmBvNZcDUQGYgMblX0XrPDDJVQAQs26gpyL8xngczEQemFm/XpPS4HPYG/U11QgSbYqEeO45y1BrAuGBmYzIEO5tXxkkCBAahACpaPe+vQGkC2ZKHgFlrqSDleHCgwCBW4AQvk7us5Vj0TcisQ2lfB1uOHwAwNQw0VcN151jbSv6SqQLj+FuxLw70B/oLuhhpq/KlGBajqX4uqANn+Z8AMfRlqqPg7HKfR65+h4eA8E2ZoNqiqOyC/nNYA0GkxqCNa0wRYK6gRrQLqrnl1rC7Y9Xr6P0zZq6p63hXHAAAAAElFTkSuQmCC" style={{mixBlendMode: 'multiply'}} /><polygon points="19.86 14 19.86 85.14 76.43 85.14 93.29 68.29 93.29 14 19.86 14" fill="#fbfbfb" /><path d="M58.22,31.6A17.71,17.71,0,1,1,43.9,37.34" fill="none" stroke="#59c159" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={6} /><text transform="translate(50.05 53.67)" fontSize="13.83" fontFamily="StretchProRegular, Stretch Pro">8</text></g></g></g></svg>


    }
const Sept = ()=>{
    return <svg width={70} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 117 114"><g style={{isolation: 'isolate'}}><g id="Calque_2" data-name="Calque 2"><g id="sss"><g id="sept"><image width={117} height={114} opacity="0.25" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAByCAYAAABtAZ4EAAAACXBIWXMAAAsSAAALEgHS3X78AAALrElEQVR4Xu2dYXPiOBOEGza3e/v//+u7d7cEvx/IbJqmRyMRG4zLXaWSLRljzaMeiVRCDtM0Yde2dKwu2PV6eqsueIQOh8OhuuZVNK0g9R2WeoYtgVpKS02A2aDeAXH0+lfUUHDngvxlqA2YFbSqfwuqgmv7vwr3bqgGZnWetY30r1lVIF2/tl2d3wt3GGoBc/RYtVWo3Dd6PAx3CKoAdce9deiVIVbKXNhbXx2PgO2GmgDleuQ4zllbANxKpxOuwfUcc90NtgtqA6iDlhWY49AWgIac0xy4rOg1fJ8usOUPHwzQFsRjR5u7D+sVAWcOzUCd5VzbnCbgwqMC24TaCfRoatfmJgFM/cpSZzknnk19xmX83Baa8BmbLrClUz/k4CrEVmkBhqlfUS2gGUgtATZez8f46G+6FGhAJZdW7ozyragd4K2A7QUa5d3UOu4zLnFyrp1abh1xqhaGGeDe6Pyb9Dm4WkD1K6lKtw4mlyOAEy5jf6f7hntZ9znVuDSOnTujvFH9ZtoUbuXY0Boha2ArhzLMk6lj/Cd42TScubXHqRpw59I3Kn9JzZDVuQoWVOvx2sTBVKgB1DnzROU3bscf4nseqOY+qxuohUsVaKTcgJgVB7eVikOvBLWVch3MAOqgTrjEiO+tQFO3Vk5VB3Ha5DU0oH6n+judK9wWWFD9CnIuzYAGTF6OeNw6OeJ+Rzov3VpBDWVOZaBRfnyU71QzXAbb49a1q3KpAv3vo/C4s/tM+AQacWmmXqAPqgabQfB6Gg79QeVv9INtQV0TZA1qBjUDGuN2DtUJEbGJXXAX2Cuosp5qcBUsb3wCVsD7AeAnPqGye+PamBA9KXitUFupN3a3Dqg6VGFGXBVmiI9v1tWlnPo3lZ/wYN3aqgNYE0yVAlWXhlMVaLiUX8uvecO1S10W63dqQwzUOZXXVU7BP/HpWE7FnIa3CpXTro41Xqdp+oTruMZPmjgFl6qgaoAV7BGfTmW3Mthwa4Dl9VXdqjNy7XLraeZSTrnuutgVv+H686tblppuraCGHNhet3IaVrfqhqkFdQ2QezZJukHijVG8RoHqBHfZC+iMQQuqgtTSWlszsOxW3jDxWuOgdg3mQdKNEhf+yVEGNDZRJ1xcPPIxTwFbt1ZOdYENoFGrWxUsp2PeDX+HH8yrQtX1NHMop2UFqksRp2yNx5fTbyhzKsNVsA6ug6opGLgeiDt/pFzqjVrXU848cY2mWwdUY+omeCkH1d3EpQAu8UAMVtdZB9jtgI/0nlyvSZPU7nNmjIOB6q5fgbolSAuLJ80f9TjVBZXfhFOFrrHs3ACsTs6cmr3vs+TSndskccqMtr9wvbvl+KgzvxyDHqgsfiMF64qutwq5lX75fdYmTb0BlZ+bN07qSpdqs5SbwU31B6r5zXsV9zuwvXBdeZPr3UCq53uE3LqaAT3Dj7UHppvQzfHzjwp7ndoDtAfwN1NrWwwQVK9R7FYG8Q2fLnVja4H8EthQCyrf2PW5tp6SzdTKqWtUOFXPR+Fl423F/4DkY02vU0M6a9xDVQ/OcPnYBQBUr0kazCO1RyoehZm1R1+3RqFW6nnQ3n4d2Jp0wC3Y0fFp/2yaGyqLH7QaUNW2NsU6quodU7QvoiPmUTbbWu2ttjUDBfzzVWPitpH2Yc3h1HsfJAPXG7BnKdLuAZ+O5VT81Ql57+v+aC6nquacjaPXL63R55kzFl1aCqpTawCLDO4JWsUYHwmV9dUUtXY9dXzPgrprQe1QN6gd6ga1Q92gdqgb1A51g9qhblA71A1qh7pB7VA3qB3qBrVD3aB2qBvUDnWD2qEuo0nq7JpW/93aoT5OvQB7r0u1Q51XDkivI3uu6dIO9TnKAM4Cdoe6nCrX9qy7d2mHOr/0b2vcsbZpn6bsqv9KO9Tlpe50Rfv4tawuV+9Q71crjd4DT/u5rxR/jd0OdVwu4JUTo5yL8wx0nHdphzqfeoGecQ3TgWWgCrfUDnVMLrgOgMLk4tq43YFladvNNTvU+9RyYgaNv2cp66+cWwIFdqgjmqTWNgf0nWo97gE8BDP0LKguQGuWPm+PQx3EE26hKuDMne7cao6/T+1VC+Ba4VauZJgO0qkoGeget6ZayqnZQww93IdGr59D+pwOaGvNdEB/J7WCzdIwcP1MqeZwatcbGWUPOuH6r7TdNY9UBdS5k8HFN4Zqzf2ZW51TS2PMARUYd2bV5sA+Sm6SRd1yqHNmBpRrTcctt3ZN7rmgOimkbMZpG0u/T+FRaj17CyaD5PKv1FzYrQ6svv9NrEb/g9SoKnA9/awJz3UqP1MEOGCecQuTgf5blAxsy62hG7CsUahuwD2gXDnLccDTzZt98IWVjUXXUedOhfcPFQdWnapgszinakFt3cC1VxA1MFz0m0qe+Z0Jk9Qc2Ag0p90M6D+NUjn1IWsq3yybxT3w3k3NQOO17utolgDcmrRuPG6XG1AdzF8fRY/ZtbphytbUUAn4D9RpmqbiO397wDqQGgwuR3zCiq9UVecuAdMpCxyPi4GySxXoL1NcGr5ns3Sle/8pLotvPArzRHV8z686NCA7pyJpu0fpLEd7osZYAoCm3QD6Pyq/qFa4DLV3PW09O4A+qO4mOmg3eIbIM5u/Oz7uFa85UvsjncpjzKCOuJRhZkDjdbxzVodmLp0AWJcCHmpcyMHMZkwUXiMVKD90AI17x2vcd+gDt0DnApxN1KgVaoxPP8I4l6pTHVi3UcpSbzP9OvU4leVmcGsm8+AVaEyGgBoudel3LpgqDVLmUs4+bsfr1lKF2dokZZ9Rh10K1FBvbobPwfIszoD+h+t/U6JAn/1vwXqh6vgCRrbjdWspu3QUaLdLgfpz6gH+5tUsZnfGf7JQoG6NzaDCnH9VDmjUbny6nGROrXa/LaAu7bJKlwK1U0PZgNWlLt06h55Q/6OhuSG2NEmtmYjXU+dUXlNdXaXdANty6SxOBa5vxkAZLA/WAdVdblzn/iWYAn0UWB0jj7M1cbMfOmhh+CMuvQFauRSooYYcUDfYN1wemp0Hut4BfTZUDpJCrdZUhhpgGbDCdEBP8l6pO3uAAn1Q9U10sOxS97GEZ3sEJDZIsd4qVOAa6NxwNTjOqTxWnbwxDnaruvZf6fuNa6CccqNm4/AzdQMFBCr9qJBvwHB4sOzU37iFE69h+LwbbqXeR2+Soi3adYmpUrDC1WMFqimX48rPNgwUmM+pzmlxvUu7CrSCurQmU5/hxxqTmPcQDjD3qTs15Tp3DoFk9UAFPNR35DD4ugxoBhV4PFTgNqBuAvNyw46tCsPklMvuPOOiK6CjLgVqqHHDSMnnj+OoT/BA41p2aQ9QdenScDVgmpV0Emsa5jU2qzXdBlRNu6Dzy8kdQAEDVdZVBhV1AAU+wf55OV3DUBlmAI3Pr4/cIDlx4NSt7KIWWFfYmQqT76vveTm5EyhQOxW4dSvPrHdzLbs0YPIayjvkno8xS4F1QePA6gSdcJ06Fa47djAXBQokUAu3BlDVROWMC7z3j/o36pSbQX2UJlO3HKtws/MM5iJAgT6nArezmt0a59+oPWCyMxlmy6HPhhrHrqjjFLID6WAq1MvBDECBBlTjVn7DMy5g1LXxsNF3xGWQDHKNQEMa6AxsC7D2ZxOE32c2oMCYU10a5rYYiHNkT7p9NtBQD1iF62o9hjm+HMwIFAAO1f3kl9EUhhYHL3NmBvNZcDUQGYgMblX0XrPDDJVQAQs26gpyL8xngczEQemFm/XpPS4HPYG/U11QgSbYqEeO45y1BrAuGBmYzIEO5tXxkkCBAahACpaPe+vQGkC2ZKHgFlrqSDleHCgwCBW4AQvk7us5Vj0TcisQ2lfB1uOHwAwNQw0VcN151jbSv6SqQLj+FuxLw70B/oLuhhpq/KlGBajqX4uqANn+Z8AMfRlqqPg7HKfR65+h4eA8E2ZoNqiqOyC/nNYA0GkxqCNa0wRYK6gRrQLqrnl1rC7Y9Xr6P0zZq6p63hXHAAAAAElFTkSuQmCC" style={{mixBlendMode: 'multiply'}} /><polygon points="19.86 14 19.86 85.14 76.43 85.14 93.29 68.29 93.29 14 19.86 14" fill="#fbfbfb" /><path id="barre8" d="M58.22,31.6A17.71,17.71,0,1,1,40.91,41.84" fill="none" stroke="#65e065" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={6} /><text transform="translate(50.05 53.67)" fontSize="13.83" fontFamily="StretchProRegular, Stretch Pro">7</text></g></g></g></g></svg>

}
  const data = [
    { score: Sept(), src: cyber },
    { score: Huit(), src: crys },
    { score: Sept(), src: dbz },
    { score: Huit(), src: far },
  ];
  return (
    <div>
      <div className="row g-3">
        {data.map((el, i) => (
          <div key={i} className="col-lg-3 col-md-6 col-12" style={{ height: "330px" }}>
            <div
              className="card border-0 my-2 rounded-2 h-100 position-relative"
              style={{
                background: "url(" + el.src + ")",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="d-inline position-absolute score d-flex align-items-center justify-content-center"
                style={{
                
                  top: "3",
                  right: "3",
                
                }}
              >
                {el.score}
              </div>
              <div
                className="card-body position-absolute w-100"
                style={{ bottom: 0, height: "200px" }}
              >
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
