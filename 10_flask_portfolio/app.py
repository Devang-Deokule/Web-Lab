from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    profile = {
        "name": "Devang Deokule",
        "role": "Web Developer",
        "about": "Final year student building web applications using HTML, TypeScript, Flask, and MongoDB.",
        "skills": ["HTML", "CSS", "JavaScript", "TypeScript", "Flask", "MongoDB"],
        "projects": [
            {"title": "AJAX Search", "desc": "Dynamic search interface using JavaScript and API data."},
            {"title": "Feedback App", "desc": "Flask-based feedback collection form with validation."},
            {"title": "Task API", "desc": "RESTful CRUD API with Node.js and MongoDB."}
        ]
    }
    return render_template("index.html", profile=profile)


if __name__ == "__main__":
    app.run(debug=True)
