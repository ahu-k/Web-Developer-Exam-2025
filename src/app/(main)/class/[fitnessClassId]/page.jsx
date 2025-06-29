import { serverFetchAPI } from "@/lib/server-fetch";
import ClassDetails from "@/components/Class/ClassDetails";
import TrainerCard from "@/components/Class/TrainerCard";

export const metadata = {
    title: 'Class',
};

export default async function Class({ params }) {

    const fitnessClassId = (await params)?.fitnessClassId
    const fitnessClass = await serverFetchAPI(`classes/${fitnessClassId}`);
    const fitnessTrainer = await serverFetchAPI(`trainers/${fitnessClass?.trainer?.id}`);

	return (
        <main>
            <ClassDetails classInfo={ fitnessClass } key={ fitnessClass?.id } />
            <TrainerCard trainerInfo={ fitnessTrainer } key={ fitnessTrainer?.id }/>
        </main>
	)
}