import React, { useState } from 'react';
import Tooltip from './Tooltip-delete';
const App: React.FC = () => {
    const [comments, setComments] = useState<string[]>([
        'Komentarz 1',
        'Komentarz 2',
        'Komentarz 3',
    ]);

    const handleDelete = (index: number) => {
        const newComments = comments.filter((_, i) => i !== index);
        setComments(newComments);
    };

    return (
        <div className="p-4">
            {comments.map((comment, index) => (
                    <div key={index} className="mb-4">
                <Tooltip onDelete={() => handleDelete(index)}>
    {comment}
    </Tooltip>
    </div>
))}
    </div>
);
};

export default App;
