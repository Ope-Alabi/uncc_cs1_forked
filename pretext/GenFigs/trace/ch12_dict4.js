if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["ch12_dict4"] = {"code": "inventory = {'apples': 430, 'bananas': 312, 'oranges': 525, 'pears': 217}\n\ndel inventory['pears']\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"inventory": ["REF", 1]}, "ordered_globals": ["inventory"], "stack_to_render": [], "heap": {"1": ["DICT", ["apples", 430], ["bananas", 312], ["oranges", 525], ["pears", 217]]}, "stdout": ""}, {"line": 3, "event": "return", "func_name": "<module>", "globals": {"inventory": ["REF", 1]}, "ordered_globals": ["inventory"], "stack_to_render": [], "heap": {"1": ["DICT", ["apples", 430], ["bananas", 312], ["oranges", 525]]}, "stdout": ""}]}