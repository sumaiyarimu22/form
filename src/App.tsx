import { Form } from "@ducor/laravel-react-bootstrap-form";
const App = () => {
  return (
    <div>
      <h1>form test</h1>
      <Form
      // method='POST'
      // action='http://saas.api.jubayed.tools/module/auth/login'
      >
        {/* <Form.Group className='mb-3'>
          <Form.Label>eamil</Form.Label>
          <Form.Control
            type='text'
            name='email'
            placeholder='Enter your email'
          />
        </Form.Group> */}
      </Form>
    </div>
  );
};

export default App;
//  <Form.Group className='mb-3' controlId='module-name'>
//    <Form.Label>{t("Name")}</Form.Label>
//    <Form.Control
//      type='text'
//      name='name'
//      value={filedData.name}
//      onChange={(e) => setFiledData("name", e.target.value)}
//      isInvalid={!!errors.name}
//      disabled={processing}
//    />
//    {errors.name &&
//      errors.name.map((error, key) => (
//        <Form.Control.Feedback type='invalid' key={key}>
//          {error}
//        </Form.Control.Feedback>
//      ))}
//  </Form.Group>;
