import { read } from "to-vfile";
import { unified } from "unified";
import { base } from ".";
import layout from "./layout";

test("layout", async () => {
    const input = await read("views/layout/input.html");
    const output = await read("views/layout/output.html", "utf-8");
    const result = await unified()
        .use(base)
        .use(layout)
        .process(input);
    expect(result.value).toEqualIgnoringWhitespace(output.value);
});
