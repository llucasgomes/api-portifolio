import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "db4free.net",
    user: "llucasgomes",
    password: "LhwSd0VXNbVjxkXY",
    database: "portiflio",
    port: 3306
});

app.get("/", (req, res) => {
    res.json("hello");
});


//  ============== GETS ===================
// GET SKILLS ===========================
app.get("/skills", (req, res) => {
    const q = "SELECT * FROM skills";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

// GET USER =============================
app.get("/users", (req, res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});
// GET PROJECTS =========================
app.get("/projects", (req, res) => {
    const q = "SELECT * FROM projects";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});
// GET SOCIAL NETWORKS ==================
app.get("/social_networks", (req, res) => {
    const q = "SELECT * FROM social_networks";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});
// GET PROFILE ==========================
app.get("/profile", (req, res) => {
    const q = "SELECT * FROM profile";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});


//  ============== CREATE ===================
// POST SKILLS ==========================
app.post("/skills", (req, res) => {
    const q = "INSERT INTO skills(`title`, `desc`, `imagem`, `studying`) VALUES (?)";

    const values = [
        req.body.title,
        req.body.desc,
        req.body.imagem,
        req.body.studying,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});
// POST PROJECTS ==========================
app.post("/projects", (req, res) => {
    const q = "INSERT INTO projects(`name`, `link`, `image`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.link,
        req.body.image,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});
// POST USERS ==========================
app.post("/user", (req, res) => {
    const q = "INSERT INTO users(`name`, `img_profile`, `level`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.img_profile,
        req.body.level,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});
// POST SOCIAL NETWORKS ==========================
app.post("/social_networks", (req, res) => {
    const q = "INSERT INTO social_networks(`name`, `link`, `image`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.link,
        req.body.image,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

//  ============== UPDATE ===================
// PUT PROJECTS ==========================
app.put("/projects/:id", (req, res) => {
    const projectId = req.params.id;
    const q = "UPDATE projects SET `name`= ?, `link`= ?, `image`= ? WHERE id = ?";

    const values = [
        req.body.name,
        req.body.link,
        req.body.image,
    ];

    db.query(q, [...values, projectId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});
// PUT USER ==========================
app.put("/user/:id", (req, res) => {
    const userId = req.params.id;
    const q = "UPDATE users SET `name`= ?, `img_profile`= ?, `level`= ? WHERE id = ?";

    const values = [
        req.body.name,
        req.body.img_profile,
        req.body.level,
    ];

    db.query(q, [...values, userId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});
// PUT PROFILE ==========================
app.put("/profile/:id", (req, res) => {
    const profileId = req.params.id;
    const q = "UPDATE profile SET `name`= ?, `about`= ? WHERE id = ?";

    const values = [
        req.body.name,
        req.body.about

    ];

    db.query(q, [...values, profileId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});
// PUT SOCIAL NETWORKS ==========================
app.put("/social_networks/:id", (req, res) => {
    const social_networkId = req.params.id;
    const q = "UPDATE social_networks SET `name`= ?, `link`= ?, `image`= ? WHERE id = ?";

    const values = [
        req.body.name,
        req.body.link,
        req.body.image,
    ];

    db.query(q, [...values, social_networkId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});
// PUT SKILLS ==========================
app.put("/skills/:id", (req, res) => {
    const skillsId = req.params.id;
    const q = "UPDATE skills SET `title`= ?, `desc`= ?, `image`= ?, `studying`= ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.desc,
        req.body.imagem,
        req.body.studying,

    ];

    db.query(q, [...values, skillsId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

//  ============== DELETE ===================
// DELETE SKILLS ==========================
app.delete("/skills/:id", (req, res) => {
    const skillsId = req.params.id;
    const q = " DELETE FROM skills WHERE id = ? ";

    db.query(q, [skillsId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});
// DELETE PROJECTS ==========================
app.delete("/projects/:id", (req, res) => {
    const projectsId = req.params.id;
    const q = " DELETE FROM projects WHERE id = ? ";

    db.query(q, [projectsId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

// DELETE SOCIAL NETWORKS ==========================
app.delete("/social_networks/:id", (req, res) => {
    const social_networksId = req.params.id;
    const q = " DELETE FROM social_networks WHERE id = ? ";

    db.query(q, [social_networksId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

// DELETE USERS ==========================
app.delete("/users/:id", (req, res) => {
    const usersId = req.params.id;
    const q = " DELETE FROM users WHERE id = ? ";

    db.query(q, [usersId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("Connected to backend.");
});