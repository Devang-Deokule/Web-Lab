import os
import smtplib
from email.message import EmailMessage

from flask import Flask, redirect, render_template, request, url_for

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/sendemail/", methods=["POST"])
def sendemail():
    if request.method == "POST":
        name = request.form.get("name", "").strip()
        subject = request.form.get("Subject", "").strip()
        email = request.form.get("_replyto", "").strip()
        message = request.form.get("message", "").strip()

        smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
        smtp_port = int(os.getenv("SMTP_PORT", "587"))
        smtp_user = os.getenv("SMTP_USER")
        smtp_password = os.getenv("SMTP_PASSWORD")
        receiver_email = os.getenv("RECEIVER_EMAIL", "deokuledevang@gmail.com")

        if smtp_user and smtp_password:
            msg = EmailMessage()
            msg.set_content(
                f"First Name : {name}\n"
                f"Email : {email}\n"
                f"Subject : {subject}\n"
                f"Message : {message}"
            )
            msg["Subject"] = "New Response on Personal Website"
            msg["From"] = smtp_user
            msg["To"] = receiver_email

            try:
                with smtplib.SMTP(smtp_host, smtp_port, timeout=20) as server:
                    server.ehlo()
                    server.starttls()
                    server.login(smtp_user, smtp_password)
                    server.send_message(msg)
            except Exception:
                pass

    return redirect(url_for("index"))


if __name__ == "__main__":
    app.run(debug=True)