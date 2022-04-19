import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Carolinaribeirodacol/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []); // O array vazio faz a função executar uma única vez.

    return (
        <section className="repository-list">
            <ul>
                {repositories.map(repository => (
                    <RepositoryItem key={repository.name} repository={repository} />
                ))}
            </ul>
        </section>
    )
}