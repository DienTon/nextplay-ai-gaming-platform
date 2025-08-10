import { useImperativeHandle } from "react";
import { Button, Card } from "react-bootstrap";
function ListGamePage(props) {
  return (
    <>
    <br></br>
      <div class="row">
        <div class="col-xs-6 col-md-2"></div>
        <div class="col-xs-6 col-md-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/250px-Cyberpunk_2077_box_art.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="col-xs-6 col-md-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/250px-Cyberpunk_2077_box_art.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="col-xs-6 col-md-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/250px-Cyberpunk_2077_box_art.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="col-xs-6 col-md-2"></div>

      </div>
    </>
  );
}

export default ListGamePage;
