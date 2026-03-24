from datetime import datetime
from flask import Flask, render_template, request

app = Flask(__name__)
feedback_records = []


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        name = request.form.get("name", "").strip()
        email = request.form.get("email", "").strip()
        message = request.form.get("message", "").strip()

        errors = []
        if len(name) < 2:
            errors.append("Name must be at least 2 characters.")
        if "@" not in email:
            errors.append("Please provide a valid email address.")
        if len(message) < 5:
            errors.append("Message must be at least 5 characters.")

        if errors:
            return render_template("index.html", errors=errors, old={"name": name, "email": email, "message": message})

        feedback_records.append(
            {
                "name": name,
                "email": email,
                "message": message,
                "submitted_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }
        )
        return render_template("thanks.html", name=name)

    return render_template("index.html", errors=[], old={"name": "", "email": "", "message": ""})


@app.route("/submissions")
def submissions():
    return {"count": len(feedback_records), "items": feedback_records}


if __name__ == "__main__":
    app.run(debug=True)
