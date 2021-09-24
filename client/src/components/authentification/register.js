import "./style.css";
import img1 from '../../Assets/Good team-pana.svg'
import img2 from '../../Assets/Knitting-pana.svg'
function Register() {
  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>انشاء حساب</h1>
            {/* 
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
             */}
            {/* <span>أو استخدم بريدك الإلكتروني للتسجيل</span> */}
            <input type="text" placeholder="اسم" />
            <input type="email" placeholder="بريد الالكتروني" />
            <input type="password" placeholder="كلمه السر" />
            <input type="password" placeholder="رقم الهاتف" />
            <label for="pet-select">دورك</label>
            <select name="pets" id="pet-select">
                <option value="Client">حريف</option>
                <option value="PP">تاجر</option>
                <option value="PH">موارد بشرية</option>
            </select>
            <button>سجل الأن</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>تسجيل الدخول</h1>
            {/* <div className="social-container"> */}
              {/* <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in" /></a> */}
            {/* </div> */}
            {/* <span>or use your account</span> */}
            <input type="email" placeholder="بريد الالكتروني" />
            <input type="password" placeholder="كلمه السر" />
            {/* <a href="#">Forgot your password?</a> */}
            <button>تسجيل الدخول</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>نحب نخدم</h1>
              <img src={img2} alt="" />
              {/* <p>
                To keep connected with us please login with your personal info
              </p> */}
              <button className="ghost" id="signIn">
              تسجيل الدخول
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1> وين أنت تنجم تخدم</h1>
              <img src={img1} alt="" width="100px" height="100px"/>
              <button className="ghost" id="signUp">
              حساب جديد              
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p></p>
      </footer>
    </div>
  );
}
export default Register;
