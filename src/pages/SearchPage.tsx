import { Button, Form } from "react-bootstrap";

const SearchPage = () => {
  return (
    <>
      <section>
        <h1>Search games</h1>
        <p>Search the RAWG database and add games to your library.</p>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search for a game..."
            className="me-2"
            aria-label="Search games"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </section>
    </>
  );
};

export default SearchPage;
