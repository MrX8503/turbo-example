import Link from 'next/link';
import {
    Button
} from '@/ui/src';

export default function Page() {
    return (
        <div className="ui-container ui-py-10 ui-mx-auto">
            <div className="ui-max-w-2xl">
                <h1 className="ui-text-4xl ui-mb-4">Turborepo Example</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati at similique, tenetur animi omnis dignissimos voluptates, ipsum sint, eligendi mollitia delectus ratione esse sunt quod maiores provident doloremque ea?</p>
                <Link href="https://turbo.build/repo">
                    <Button className="ui-mt-4">
                        Read More
                    </Button>
                </Link>
            </div>
        </div>
    );
}
