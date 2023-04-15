import "../styles/fight-watch.css";
import {
  Link,
  Form,
  useLoaderData,
  redirect,
  useNavigation,
} from "react-router-dom";
import $ from "jquery";
import { useEffect, useState, useRef, useContext } from "react";
import { searchFighter, loadFighters } from "../http/fight-watch";
import CardGrid from "../components/fight-watch/card-grid";
import DropDownSort from "../components/fight-watch/drop-down-sort";
import SpinnerOverlay from "../components/spinner-overlay";

function animateScroll(parent, child, callback) {
  parent.animate(
    {
      scrollTop: child.offset().top - parent.offset().top + parent.scrollTop(),
    },
    500,
    callback
  );
}

function animateFlash(target) {
  target.animate({ opacity: 0 }, 100, function () {
    target.animate({ opacity: 1 }, 2000);
  });
}

function animationController(fighterId) {
  const parentContainer = $(".fighter-container");
  const targetContainer = $(`#fighter-${fighterId.data}`);
  const imgAndDivs = targetContainer.find("img, div");

  if (parentContainer.offset() && targetContainer.offset()) {
    animateScroll(parentContainer, targetContainer, () => {
      animateFlash(imgAndDivs);
    });
  } else {
    console.error(
      "Offsets not found:",
      parentContainer.offset(),
      targetContainer.offset()
    );
  }
}

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const fighterId = await searchFighter(updates.name);

  // $(window).on("load", () => {
  //   animationController(fighterId);
  // });
  if (fighterId) {
    $(() => {animationController(fighterId)})
  }

  // return redirect(`/fight-watch#${fighterId.data}`);
  return redirect(`/fight-watch`);
}

export async function loader() {
  const fighters = await loadFighters();
  return { fighters };
}

export default function FightWatch() {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const { fighters } = useLoaderData();

  useEffect(() => {
    if (navigation.state !== "idle") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [navigation]);

  useEffect(() => {
    $("#root").removeClass();
    $("#root").addClass("fight-watch-bg");
    $("body").addClass("overflow-hidden");
  }, []);

  return (
    <>
      {loading && <SpinnerOverlay />}
      <div className="min-vh-100">
        <nav
          className="navbar navbar-expand-lg text-bg-dark position-sticky top-0 fight-watch-nav"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <svg width="50" height="50">
                <circle
                  cx="25"
                  cy="25"
                  r="24"
                  fill="rgb(136, 8, 8)"
                  stroke="rgb(136, 8, 8)"
                />
                <text
                  x="25"
                  y="36.5"
                  textAnchor="middle"
                  fontSize="30"
                  fill="white"
                  fontWeight="600"
                >
                  FW
                </text>
              </svg>
              <Link className="navbar-brand text-white nav-link mx-3" to={"/"}>
                Home
              </Link>
            </div>
            <div className="d-flex">
              <DropDownSort />
              <Form className="d-flex" method="post">
                <input
                  className="form-control mx-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  name="name"
                ></input>
                <button className="btn btn-outline-danger" type="submit">
                  Search
                </button>
              </Form>
            </div>
          </div>
        </nav>
        <div className="container-fluid fighter-container">
          {fighters ? (
            <CardGrid fighters={fighters} />
          ) : (
            <h1 className="text-center text-white">Loading...</h1>
          )}
        </div>
      </div>
    </>
  );
}
