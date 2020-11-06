import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <form class="text-center p-5">
      <p class="h4 mb-4">Sign in</p>
      <input type="email" class="form-control mb-4" placeholder="E-mail"></input>
      <input type="password" class="form-control mb-4" placeholder="Password"></input>
      <div class="d-flex justify-content-around">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"></input>
          <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
        </div>
        <div>
          <a href="">Forgot password?</a>
        </div>
      </div>
      <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>
      <p>
        Not a member ? <a href="">Register</a>
      </p>
      <p>or sign in with :</p>
      <a href="#" class="mx-2"><i class="fab fa-facebook text-primary"></i></a>
      <a href="#" class="mx-2"><i class="fab fa-twitter text-info"></i></a>
      <a href="#" class="mx-2"><i class="fab fa-linkedin text-primary"></i></a>
      <a href="#" class="mx-2"><i class="fab fa-github text-dark"></i></a>
    </form>
  );
}

export default App;
