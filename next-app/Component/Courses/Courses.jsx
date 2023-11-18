import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

const Courses = () => {

    const myCourses = [
        {
            title: 'ReactJs',
            price: '3000',
            desc: 'asjkfhkjasdnfk oah sdoiashd ashfa fpaisdoi asjfoisahfoiwd asdhsalk.',
            link: '/courses/react',
            query: {
                name: 'ReactJs',
                price: 3000,
                desc: 'React JS is a frontend language'
            }
        },
        {
            title: 'AngularJs',
            price: '5000',
            desc: 'asjkfhkjasdnfk oah sdoiashd ashfa fpaisdoi asjfoisahfoiwd asdhsalk.',
            link: '/courses/angular',
            query: {
                name: 'AngularJs',
                price: 5000,
                desc: 'Angular JS is a frontend language'
            }
        },
        {
            title: 'NodeJs',
            price: '4000',
            desc: 'asjkfhkjasdnfk oah sdoiashd ashfa fpaisdoi asjfoisahfoiwd asdhsalk.',
            link: '/courses/node',
            query: {
                name: 'NodeJs',
                price: 4000,
                desc: 'Node JS is a Backend language'
            }
        },
        {
            title: 'React Native',
            price: '6000',
            desc: 'asjkfhkjasdnfk oah sdoiashd ashfa fpaisdoi asjfoisahfoiwd asdhsalk.',
            link: '/courses/react-native'
        },
        {
            title: 'NextJs',
            price: '4500',
            desc: 'asjkfhkjasdnfk oah sdoiashd ashfa fpaisdoi asjfoisahfoiwd asdhsalk.',
            link: '/courses/next'
        },
        {
            title: 'VueJs',
            price: '5500',
            desc: 'asjkfhkjasdnfk oah sdoiashd ashfa fpaisdoi asjfoisahfoiwd asdhsalk.',
            link: '/courses/vue'
        }
    ]

    const NewCourse = ({ item }) => {
        const tmp = (
            <Grid item sm={4}>
                <Card sx={{ p: 1 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            {item.price}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {item.desc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link href={item.link}>
                            <Button variant="outlined">Syllabus</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        );
        return tmp;
    }

    const design = (
        <>
            <Container sx={{ py: 4, p: 3 }}>
                <Typography variant="h2" sx={{ mb: 3 }}>Courses</Typography>
                <Grid container spacing={5}>
                    {
                        myCourses.map((item, index) => {
                            return <NewCourse key={index} item={item} />
                        })
                    }
                </Grid>
            </Container>
        </>
    );
    return design;
}

export default Courses;