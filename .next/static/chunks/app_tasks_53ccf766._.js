(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/tasks/TaskForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TaskForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$Authcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/Authcontext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function TaskForm({ onTaskCreated }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$Authcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthContext"]);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dueDate, setDueDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    if (!user || !user.email) return null;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000")}/api/tasks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    description,
                    userEmail: user.email,
                    dueDate
                })
            });
            const data = await res.json();
            console.log('API response:', data);
            if (!res.ok) throw new Error(data.error || 'Failed to add task');
            // Clear inputs
            setTitle('');
            setDescription('');
            setDueDate('');
            onTaskCreated(); // refresh task list
        } catch (err) {
            console.error('Error adding task:', err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: title,
                onChange: (e)=>setTitle(e.target.value),
                placeholder: "Task title",
                required: true,
                className: "w-full px-2 py-1 border rounded"
            }, void 0, false, {
                fileName: "[project]/app/tasks/TaskForm.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: description,
                onChange: (e)=>setDescription(e.target.value),
                placeholder: "Description",
                className: "w-full px-2 py-1 border rounded"
            }, void 0, false, {
                fileName: "[project]/app/tasks/TaskForm.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "date",
                value: dueDate,
                onChange: (e)=>setDueDate(e.target.value),
                className: "w-full px-2 py-1 border rounded"
            }, void 0, false, {
                fileName: "[project]/app/tasks/TaskForm.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700",
                children: "Add Task"
            }, void 0, false, {
                fileName: "[project]/app/tasks/TaskForm.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tasks/TaskForm.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(TaskForm, "kPrtbk/gHrT9EhEqzD4iZsKCpYU=");
_c = TaskForm;
var _c;
__turbopack_context__.k.register(_c, "TaskForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/tasks/TaskList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TaskList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$Authcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/Authcontext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function TaskList({ refreshTrigger }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$Authcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthContext"]);
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const fetchTasks = async ()=>{
        if (!user?.email) return;
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000")}/api/tasks?email=${user.email}`);
            const data = await res.json();
            setTasks(data);
        } catch (err) {
            console.error('Error fetching tasks:', err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskList.useEffect": ()=>{
            fetchTasks();
        }
    }["TaskList.useEffect"], [
        user,
        refreshTrigger
    ]);
    const toggleStatus = async (taskId, completed)=>{
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000")}/api/tasks/${taskId}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    completed
                })
            });
            const updated = await res.json();
            setTasks((prev)=>prev.map((task)=>task._id === taskId ? {
                        ...task,
                        completed: updated.completed
                    } : task));
        } catch (err) {
            console.error('Error updating task status:', err);
        }
    };
    const handleDelete = async (id)=>{
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000")}/api/tasks/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                setTasks((prev)=>prev.filter((task)=>task._id !== id));
            }
        } catch (err) {
            console.error('Failed to delete task:', err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: tasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '0.75rem',
                    padding: '0.75rem',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: '200px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: task.completed,
                                        onChange: (e)=>toggleStatus(task._id, e.target.checked),
                                        style: {
                                            marginRight: '0.5rem'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/tasks/TaskList.tsx",
                                        lineNumber: 86,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: task.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/tasks/TaskList.tsx",
                                        lineNumber: 92,
                                        columnNumber: 7
                                    }, this),
                                    " - ",
                                    task.description || 'No description'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tasks/TaskList.tsx",
                                lineNumber: 85,
                                columnNumber: 5
                            }, this),
                            task.dueDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.85rem',
                                    color: '#666',
                                    marginTop: '0.25rem'
                                },
                                children: [
                                    "📅 Due: ",
                                    new Date(task.dueDate).toLocaleDateString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tasks/TaskList.tsx",
                                lineNumber: 97,
                                columnNumber: 7
                            }, this),
                            task.createdAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.75rem',
                                    color: '#999',
                                    marginTop: '0.25rem'
                                },
                                children: [
                                    "🗓️ Created: ",
                                    new Date(task.createdAt).toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tasks/TaskList.tsx",
                                lineNumber: 104,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tasks/TaskList.tsx",
                        lineNumber: 84,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleDelete(task._id),
                        style: {
                            background: '#e74c3c',
                            color: 'white',
                            border: 'none',
                            padding: '0.4rem 0.75rem',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            alignSelf: 'start'
                        },
                        children: "🗑️ Delete"
                    }, void 0, false, {
                        fileName: "[project]/app/tasks/TaskList.tsx",
                        lineNumber: 111,
                        columnNumber: 3
                    }, this)
                ]
            }, task._id, true, {
                fileName: "[project]/app/tasks/TaskList.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/tasks/TaskList.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(TaskList, "xnrbixG0+rNeUqyC7MQWRkXMqZc=");
_c = TaskList;
var _c;
__turbopack_context__.k.register(_c, "TaskList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_tasks_53ccf766._.js.map