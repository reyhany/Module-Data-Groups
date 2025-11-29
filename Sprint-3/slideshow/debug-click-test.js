const { JSDOM } = require("jsdom");
const path = require("path");
(async () => {
  const page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
  });

  await new Promise((res) => {
    page.window.document.addEventListener("load", res);
  });

  const img = page.window.document.querySelector("#carousel-img");
  const forwardBtn = page.window.document.querySelector("#forward-btn");
  const backwardBtn = page.window.document.querySelector("#backward-btn");
  const autoForwardBtn = page.window.document.querySelector("#auto-forward");

  console.log("initial src =", img.getAttribute("src"));
  console.log("forwardBtn.onclick =", typeof forwardBtn.onclick);
  console.log("backwardBtn.onclick =", typeof backwardBtn.onclick);
  console.log("autoForwardBtn.onclick =", typeof autoForwardBtn.onclick);
  // try element.click()
  forwardBtn.click();
  console.log("after forwardBtn.click src =", img.getAttribute("src"));

  // call onclick directly to verify handler works
  try {
    forwardBtn.onclick();
    console.log("after forwardBtn.onclick() src =", img.getAttribute("src"));
  } catch (err) {
    console.log("forwardBtn.onclick() threw", err && err.message);
  }

  // try dispatchEvent of a MouseEvent (bubbles)
  forwardBtn.dispatchEvent(
    new page.window.MouseEvent("click", { bubbles: true, cancelable: true })
  );
  console.log("after forwardBtn.dispatchEvent src =", img.getAttribute("src"));

  forwardBtn.dispatchEvent(
    new page.window.MouseEvent("click", { bubbles: true, cancelable: true })
  );
  console.log(
    "after second forwardBtn.dispatchEvent src =",
    img.getAttribute("src")
  );

  backwardBtn.dispatchEvent(
    new page.window.MouseEvent("click", { bubbles: true, cancelable: true })
  );
  console.log("after backwardBtn.dispatchEvent src =", img.getAttribute("src"));

  autoForwardBtn.click();
  console.log("after autoForwardBtn.click disabled=", autoForwardBtn.disabled);

  // wait 2100ms in page timers
  await new Promise((res) => setTimeout(res, 2100));
  console.log("after 2100ms src =", img.getAttribute("src"));

  process.exit(0);
})();
