if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["chp09_is3"] = {"code": "a = [81, 82, 83]\nb = [81, 82, 83]\n\nprint(a == b)\nprint(a is b)\n\nb = a\nprint(a == b)\nprint(a is b)\n\nb[0] = 5\nprint(a)\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"a": ["REF", 1]}, "ordered_globals": ["a"], "stack_to_render": [], "heap": {"1": ["LIST", 81, 82, 83]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"a": ["REF", 1], "b": ["REF", 2]}, "ordered_globals": ["a", "b"], "stack_to_render": [], "heap": {"1": ["LIST", 81, 82, 83], "2": ["LIST", 81, 82, 83]}, "stdout": ""}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"a": ["REF", 1], "b": ["REF", 2]}, "ordered_globals": ["a", "b"], "stack_to_render": [], "heap": {"1": ["LIST", 81, 82, 83], "2": ["LIST", 81, 82, 83]}, "stdout": "True\n"}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"a": ["REF", 1], "b": ["REF", 2]}, "ordered_globals": ["a", "b"], "stack_to_render": [], "heap": {"1": ["LIST", 81, 82, 83], "2": ["LIST", 81, 82, 83]}, "stdout": "True\nFalse\n"}, {"line": 8, "event": "step_line", "func_name": "<module>", "globals": {"a": ["REF", 1], "b": ["REF", 1]}, "ordered_globals": ["a", "b"], "stack_to_render": [], "heap": {"1": ["LIST", 81, 82, 83]}, "stdout": "True\nFalse\n"}, {"line": 9, "event": "step_line", "func_name": "<module>", "globals": {"a": ["REF", 1], "b": ["REF", 1]}, "ordered_globals": ["a", "b"], "stack_to_render": [], "heap": {"1": ["LIST", 81, 82, 83]}, "stdout": "True\nFalse\nTrue\n"}, {"line": 11, "event": "step_line", "func_name": "<module>", "globals": {"a": ["REF", 1], "b": ["REF", 1]}, "ordered_globals": ["a", "b"], "stack_to_render": [], "heap": {"1": ["LIST", 81, 82, 83]}, "stdout": "True\nFalse\nTrue\nTrue\n"}, {"line": 12, "event": "step_line", "func_name": "<module>", "globals": {"a": ["REF", 1], "b": ["REF", 1]}, "ordered_globals": ["a", "b"], "stack_to_render": [], "heap": {"1": ["LIST", 5, 82, 83]}, "stdout": "True\nFalse\nTrue\nTrue\n"}, {"line": 12, "event": "return", "func_name": "<module>", "globals": {"a": ["REF", 1], "b": ["REF", 1]}, "ordered_globals": ["a", "b"], "stack_to_render": [], "heap": {"1": ["LIST", 5, 82, 83]}, "stdout": "True\nFalse\nTrue\nTrue\n[5, 82, 83]\n"}]}