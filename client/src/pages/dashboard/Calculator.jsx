import React from 'react'

function Calculator() {
    const [input, setInput] = React.useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleEqual = () => {
        try {
            // eslint-disable-next-line no-eval
            setInput(String(eval(input)));
        } catch {
            setInput("Error");
        }
    };

    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+"
    ];

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-72">
                <div className="mb-4 bg-gray-200 rounded p-2 text-right text-xl font-mono h-12 flex items-center justify-end">
                    {input || "0"}
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {buttons.map((btn) =>
                        btn === "=" ? (
                            <button
                                key={btn}
                                className="col-span-1 bg-blue-500 text-white rounded p-2 text-lg hover:bg-blue-600"
                                onClick={handleEqual}
                            >
                                {btn}
                            </button>
                        ) : (
                            <button
                                key={btn}
                                className="col-span-1 bg-gray-300 rounded p-2 text-lg hover:bg-gray-400"
                                onClick={() => handleClick(btn)}
                            >
                                {btn}
                            </button>
                        )
                    )}
                    <button
                        className="col-span-4 bg-red-400 text-white rounded p-2 text-lg mt-2 hover:bg-red-500"
                        onClick={handleClear}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;