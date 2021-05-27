const galleryImageButton = document.getElementsByClassName("galleryButton")[0];
const galleryImageButton2 =
  document.getElementsByClassName("galleryButton2")[0];
const galleryImageElement = document.getElementsByClassName("galleryItem")[0];
const imageCitation = document.getElementsByClassName("imageCitation")[0];
const galleryImageAnchor =
  document.getElementsByClassName("galleryItemAnchor")[0];
const greetingText = document.getElementsByTagName("h2")[0];
const submitForm = document.getElementsByClassName("submitButton")[0];

let currentBalance = 1000.0;
const clientName = "John";
let imageSelector = 1;
let currentCitation;

const imageCitation1 =
  "The image above was retrieved from this source: https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fcheerful-businesswoman-meets-with-client-picture-id1181008199%3Fk%3D6%26m%3D1181008199%26s%3D612x612%26w%3D0%26h%3DK98Rpl9qt57cs4SOea7DoQAyVCPBbsQfPbQFQX13yrw%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbanking&tbnid=WfpZ4Mnm5OYsGM&vet=12ahUKEwjIx52WlenwAhXEOn0KHaq0CCUQMygAegUIARDrAQ..i&docid=08DoFl6cykiuAM&w=612&h=408&itg=1&q=banking%20stock%20images&hl=en&ved=2ahUKEwjIx52WlenwAhXEOn0KHaq0CCUQMygAegUIARDrAQ";
const imageCitation2 =
  "The image above was retrieved from this source: https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fmobile-banking-man-using-online-banking-technology-on-touch-screen-picture-id962095646%3Fk%3D6%26m%3D962095646%26s%3D612x612%26w%3D0%26h%3DX4NG4B7ZVOhW61Ebjew2DnsgqQkue7vSqOBro47hVaU%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fonline-banking&tbnid=bcV28rlfmso5oM&vet=12ahUKEwjIx52WlenwAhXEOn0KHaq0CCUQMygBegUIARDuAQ..i&docid=zzQVYpLZfq83IM&w=612&h=408&itg=1&q=banking%20stock%20images&hl=en&ved=2ahUKEwjIx52WlenwAhXEOn0KHaq0CCUQMygBegUIARDuAQ";
const imageCitation3 =
  "The image above was retrieved from this source: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fmobile-banking-network-gm1049658918-280711319&psig=AOvVaw3g28mBXpL3EdyqS_95bnKg&ust=1622180972381000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjW7KeV6fACFQAAAAAdAAAAABAN";
const imageCitation4 =
  "The image above was retrieved from this source: https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fonline-banking-on-smartphone-with-businessman-showing-screen-picture-id654378978%3Fk%3D6%26m%3D654378978%26s%3D612x612%26w%3D0%26h%3DW4XJiMx8Thwl2avhOK0GSPCeFCyaRbLkLqRiGJWb-Ac%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fonline-banking&tbnid=0ExyUXbgBBrR5M&vet=12ahUKEwjIx52WlenwAhXEOn0KHaq0CCUQMygDegUIARD0AQ..i&docid=zzQVYpLZfq83IM&w=612&h=408&itg=1&q=banking%20stock%20images&hl=en&ved=2ahUKEwjIx52WlenwAhXEOn0KHaq0CCUQMygDegUIARD0AQ";

function rotateImage() {
  if (imageSelector < 4) {
    imageSelector++;
  } else {
    imageSelector = 1;
  }
  galleryImageElement.setAttribute(
    "src",
    "galleryImage" + imageSelector + ".jpg"
  );
  galleryImageAnchor.setAttribute(
    "href",
    "galleryImage" + imageSelector + ".jpg"
  );

  switch (imageSelector) {
    case 1:
      imageCitation.textContent = imageCitation1;
      break;
    case 2:
      imageCitation.textContent = imageCitation2;
      break;
    case 3:
      imageCitation.textContent = imageCitation3;
      break;
    case 4:
      imageCitation.textContent = imageCitation4;
      break;
  }
}

window.addEventListener("load", function () {
  greetingText.textContent =
    "Hello, " +
    clientName +
    "! Your current balance is : $" +
    currentBalance +
    ". What would you like to do?";
});

window.setInterval(rotateImage, 10000);

galleryImageButton.addEventListener("click", function () {
  console.log("back");
  if (imageSelector > 1) {
    imageSelector--;
  } else {
    imageSelector = 4;
  }
  galleryImageElement.setAttribute(
    "src",
    "galleryImage" + imageSelector + ".jpg"
  );

  galleryImageAnchor.setAttribute(
    "href",
    "galleryImage" + imageSelector + ".jpg"
  );
});

galleryImageButton2.addEventListener("click", rotateImage);

submitForm.addEventListener("click", function () {
  let req = new XMLHttpRequest();
  let payload = { feedbackField: null };
  payload.feedbackField = document.getElementById("feedbackField").value;
  req.open(
    "POST",
    "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php",
    false
  );
  req.setRequestHeader("Content-Type", "application/json");
  req.send(JSON.stringify(payload));
  let response = JSON.parse(req.responseText);
});
