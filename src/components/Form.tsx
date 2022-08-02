type Props = {
  setUsername: Function;
  setEmail: Function;
  setBestFeatures: Function;
  setWorstFeatures: Function;
  setConsistency: Function;
  setColour: Function;
  setLogo: Function;
  setTimeSpent: Function;
  setReview: Function;
  resetState: Function;
};

function resetForm() {
  let form = document.querySelector(".form");
  form
    .querySelectorAll("input:checked")
    .forEach((item) => (item.checked = !item.checked));
  form?.querySelectorAll(".formText").forEach((item) => (item.value = ""));
}

export function Form(props: Props) {
  return (
    <form
      action=""
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        props.resetState();
        e.target.email.value ? props.setEmail(e.target.email.value) : null;
        e.target.username.value
          ? props.setUsername(e.target.username.value)
          : null;
        props.setBestFeatures(
          [
            ...document.querySelectorAll('input[name="best-feature"]:checked'),
          ].map((input) => input.value)
        );
        props.setWorstFeatures(
          [
            ...document.querySelectorAll('input[name="worst-feature"]:checked'),
          ].map((input) => input.value)
        );
        props.setTimeSpent(
          [...document.querySelectorAll('input[name="timeSpent"]:checked')].map(
            (input) => input.value
          )
        );
        props.setConsistency(e.target.consistency.value);
        props.setColour(e.target.colour.value);
        props.setLogo(e.target.logo.value);
        props.setReview(e.target.review.value);
        resetForm();
      }}
    >
      <h2>Tell us what you think about your rubber duck!</h2>
      <label htmlFor="">
        What would you say are the best features of your rubber duck?
      </label>
      <div className="form__group">
        <label htmlFor="">
          <input
            type="checkbox"
            name="best-feature"
            id=""
            value="It's yellow!"
          />
          It's yellow!
        </label>
        <label htmlFor="">
          <input type="checkbox" name="best-feature" id="" value="It squaks!" />
          It squaks!
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="best-feature"
            id=""
            value="It has a logo!"
          />
          It has a logo!
        </label>
        <label htmlFor="">
          <input type="checkbox" name="best-feature" id="" value="Its big!" />
          Its big!
        </label>
      </div>
      <label htmlFor="">
        What would you say that are the worst bits of your rubber duck?
      </label>
      <div className="form__group ">
        <label htmlFor="">
          <input
            type="checkbox"
            name="worst-feature"
            id=""
            value="It's yellow!"
          />
          It's yellow!
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="worst-feature"
            id=""
            value="It squaks!"
          />
          It squaks!
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="worst-feature"
            id=""
            value="It has a logo!"
          />
          It has a logo!
        </label>
        <label htmlFor="">
          <input type="checkbox" name="worst-feature" id="" value="Its big!" />
          Its big!
        </label>
      </div>
      <label htmlFor="">How do you rate your rubber duck consistency?</label>
      <div className="form__group radio">
        <input type="radio" name="consistency" id="cons1" value={1} />
        <label htmlFor="cons1">1</label>
        <input type="radio" name="consistency" id="cons2" value={2} />
        <label htmlFor="cons2">2</label>
        <input type="radio" name="consistency" id="cons3" value={3} />
        <label htmlFor="cons3">3</label>
        <input type="radio" name="consistency" id="cons4" value={4} />
        <label htmlFor="cons4">4</label>
      </div>
      <label htmlFor="">How do you rate your rubber duck colour?</label>
      <div className="form__group radio">
        <input type="radio" name="colour" id="colour1" value={1} />
        <label htmlFor="colour1">1</label>
        <input type="radio" name="colour" id="colour2" value={2} />
        <label htmlFor="colour2">2</label>
        <input type="radio" name="colour" id="colour3" value={3} />
        <label htmlFor="colour3">3</label>
        <input type="radio" name="colour" id="colour4" value={4} />
        <label htmlFor="colour4">4</label>
      </div>
      <label htmlFor="">How do you rate your rubber duck logo?</label>
      <div className="form__group radio">
        <input type="radio" name="logo" id="logo1" value={1} />
        <label htmlFor="logo1">1</label>
        <input type="radio" name="logo" id="logo2" value={2} />
        <label htmlFor="logo2">2</label>
        <input type="radio" name="logo" id="logo3" value={3} />
        <label htmlFor="logo3">3</label>
        <input type="radio" name="logo" id="logo4" value={4} />
        <label htmlFor="logo4">4</label>
      </div>
      <label htmlFor="">How do you like to spend time with your duck?</label>
      <div className="form__group ">
        <label htmlFor="">
          <input type="checkbox" name="timeSpent" id="" value="Swimming" />
          Swimming
        </label>
        <label htmlFor="">
          <input type="checkbox" name="timeSpent" id="" value="Bathing" />
          Bathing
        </label>
        <label htmlFor="">
          <input type="checkbox" name="timeSpent" id="" value="Chatting" />
          Chatting
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="timeSpent"
            id=""
            value="I dont
          like spending time with it"
          />
          I dont like spending time with it
        </label>
      </div>
      <label htmlFor="">
        What else have you got to say about your rubber duck?
      </label>
      <textarea
        name="review"
        id=""
        cols={30}
        rows={18}
        className="formText"
      ></textarea>
      <label htmlFor="name">Put your name here(if you like it)</label>
      <input type="text" name="username" id="name" className="formText" />
      <label htmlFor="email">Leave us your email pretty please</label>
      <input type="email" name="email" id="email" className="formText" />
      <input type="submit" name="" id="" className="form__submit" />
    </form>
  );
}
