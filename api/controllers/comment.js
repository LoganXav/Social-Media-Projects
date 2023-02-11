export const getComments = (req, res) => {
    
        const q = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN users AS u ON (u.id = p.userId) 
        WHERE c.postId = ? ORDER BY p.createdAT DESC`        
    
        db.query(q, [req.query.postId], (err, data) => {         // [req.query.postId] we only need the id of the post that we wat to view its comments
            if (err) return res.status(500).json(err)
            console.log(err)
        return res.status(200).json(data)
        })
    
}