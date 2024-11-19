import { getDataByCategory, getAllDataByType } from "../../lib/cosmic";

export async function getServerSideProps() {
    const reviews = (await getAllDataByType("reviews")) || [];
    const landing = (await getAllDataByType("landings")) || [];
    const categoryTypes = (await getAllDataByType("categories")) || [];
    const categoriesData = await Promise.all(
        categoryTypes?.map((category) => {
            return getDataByCategory(category?.id);
        })
    );
    const navigationItems = (await getAllDataByType("navigation")) || [];

    const categoriesGroups = categoryTypes?.map(({ id }, index) => {
        return { [id]: categoriesData[index] };
    });

    const categoriesType = categoryTypes?.reduce((arr, { title, id }) => {
        return { ...arr, [id]: title };
    }, {});

    const categoriesGroup = { groups: categoriesGroups, type: categoriesType };

    return {
        props: {
            reviews,
            landing,
            categoriesGroup,
            categoryTypes,
            navigationItems,
        },
    };
}