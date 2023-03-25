import Link from "next/link";
import Label from "@/components/ui/label";
import { CategoryProp } from "@/model-view";

export default function CategoryLabel({ categories }: { categories: CategoryProp[] }) {
  return (
    <div className="flex gap-3">
      {(categories?.length &&
        categories.slice(0).map((category, index) => (
          <Link href="#" key={index}>
            <a>
              <Label color={category.color}>{category.title}</Label>
            </a>
          </Link>
        ))) || ""}
    </div>
  );
}
