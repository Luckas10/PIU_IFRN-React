import { useState, useEffect } from "react";
import axios from "axios";
import "./ListRendering.css";

function ListRendering() {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchPosts() {
        try {
            setLoading(true);
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(response.data);
        } catch (error) {
            console.error("Erro ao buscar posts:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const filtered = posts.filter((post) => {
        if (query.trim() === "") return true;
        const q = Number(query);
        if (Number.isNaN(q)) return false;
        return post.userId === q;
    });

    return (
        <>
            <h4>04 - Crie uma renderização de listas utilizando um dos resources do JSONPlaceholder</h4>

            <div className="posts-container">
                <div className="posts-header">
                    <h2>Posts</h2>

                    <div className="posts-search">
                        <input
                            type="text"
                            placeholder="Buscar por ID do usuário..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>

                    <button onClick={fetchPosts} disabled={loading}>
                        {loading ? "Atualizando..." : "Atualizar posts"}
                    </button>
                </div>

                <ul className="posts-list">
                    {filtered.map((post) => (
                        <li className="post-card" key={post.id}>
                            <div className="post-meta">
                                <span className="badge badge--user">User #{post.userId}</span>
                                <span className="badge badge--id">Post #{post.id}</span>
                            </div>
                            <h5 className="post-title">{post.title}</h5>
                            <p className="post-body">{post.body}</p>
                        </li>
                    ))}
                </ul>

                {filtered.length === 0 && !loading && (
                    <p style={{ opacity: 0.7, marginTop: 12 }}>Nenhum post encontrado para esse usuário.</p>
                )}
            </div>
        </>
    );
}

export default ListRendering;
