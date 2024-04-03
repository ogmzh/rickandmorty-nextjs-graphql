import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import { GET_CHARACTERS } from "@/lib/queries";
import { render, screen, waitFor } from "@testing-library/react";
import { PaginatedTable } from "../paginated-table";

const dataMock = {
  request: {
    query: GET_CHARACTERS,
    variables: { page: 1 },
  },
  result: {
    data: {
      characters: {
        results: [
          {
            id: "1",
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Male",
            location: {
              name: "Citadel of Ricks",
              dimension: "unknown",
            },
            origin: {
              name: "Earth (C-137)",
              dimension: "Dimension C-137",
            },
          },
          {
            id: "2",
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Male",
            location: {
              name: "Citadel of Ricks",
              dimension: "unknown",
            },
            origin: {
              name: "unknown",
              dimension: null,
            },
          },
          {
            id: "3",
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Female",
            location: {
              name: "Earth (Replacement Dimension)",
              dimension: "Replacement Dimension",
            },
            origin: {
              name: "Earth (Replacement Dimension)",
              dimension: "Replacement Dimension",
            },
          },
          {
            id: "4",
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Female",
            location: {
              name: "Earth (Replacement Dimension)",
              dimension: "Replacement Dimension",
            },
            origin: {
              name: "Earth (Replacement Dimension)",
              dimension: "Replacement Dimension",
            },
          },
          {
            id: "5",
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Male",
            location: {
              name: "Earth (Replacement Dimension)",
              dimension: "Replacement Dimension",
            },
            origin: {
              name: "Earth (Replacement Dimension)",
              dimension: "Replacement Dimension",
            },
          },
          {
            id: "6",
            name: "Abadango Cluster Princess",
            status: "Alive",
            species: "Alien",
            type: "",
            gender: "Female",
            location: {
              name: "Abadango",
              dimension: "unknown",
            },
            origin: {
              name: "Abadango",
              dimension: "unknown",
            },
          },
          {
            id: "7",
            name: "Abradolf Lincler",
            status: "unknown",
            species: "Human",
            type: "Genetic experiment",
            gender: "Male",
            location: {
              name: "Testicle Monster Dimension",
              dimension: "Testicle Monster Dimension",
            },
            origin: {
              name: "Earth (Replacement Dimension)",
              dimension: "Replacement Dimension",
            },
          },
          {
            id: "8",
            name: "Adjudicator Rick",
            status: "Dead",
            species: "Human",
            type: "",
            gender: "Male",
            location: {
              name: "Citadel of Ricks",
              dimension: "unknown",
            },
            origin: {
              name: "unknown",
              dimension: null,
            },
          },
          {
            id: "9",
            name: "Agency Director",
            status: "Dead",
            species: "Human",
            type: "",
            gender: "Male",
            location: {
              name: "Earth (Replacement Dimension)",
              dimension: "Replacement Dimension",
            },
            origin: {
              name: "Earth (Replacement Dimension)",
              dimension: "Replacement Dimension",
            },
          },
          {
            id: "10",
            name: "Alan Rails",
            status: "Dead",
            species: "Human",
            type: "Superhuman (Ghost trains summoner)",
            gender: "Male",
            location: {
              name: "Worldender's lair",
              dimension: "unknown",
            },
            origin: {
              name: "unknown",
              dimension: null,
            },
          },
          {
            id: "11",
            name: "Albert Einstein",
            status: "Dead",
            species: "Human",
            type: "",
            gender: "Male",
            location: {
              name: "Earth (Replacement Dimension)",
              dimension: "Replacement Dimension",
            },
            origin: {
              name: "Earth (C-137)",
              dimension: "Dimension C-137",
            },
          },
          {
            id: "12",
            name: "Alexander",
            status: "Dead",
            species: "Human",
            type: "",
            gender: "Male",
            location: {
              name: "Anatomy Park",
              dimension: "Dimension C-137",
            },
            origin: {
              name: "Earth (C-137)",
              dimension: "Dimension C-137",
            },
          },
          {
            id: "13",
            name: "Alien Googah",
            status: "unknown",
            species: "Alien",
            type: "",
            gender: "unknown",
            location: {
              name: "Earth (Replacement Dimension)",
              dimension: "Replacement Dimension",
            },
            origin: {
              name: "unknown",
              dimension: null,
            },
          },
          {
            id: "14",
            name: "Alien Morty",
            status: "unknown",
            species: "Alien",
            type: "",
            gender: "Male",
            location: {
              name: "Citadel of Ricks",
              dimension: "unknown",
            },
            origin: {
              name: "unknown",
              dimension: null,
            },
          },
          {
            id: "15",
            name: "Alien Rick",
            status: "unknown",
            species: "Alien",
            type: "",
            gender: "Male",
            location: {
              name: "Citadel of Ricks",
              dimension: "unknown",
            },
            origin: {
              name: "unknown",
              dimension: null,
            },
          },
          {
            id: "16",
            name: "Amish Cyborg",
            status: "Dead",
            species: "Alien",
            type: "Parasite",
            gender: "Male",
            location: {
              name: "Earth (Replacement Dimension)",
              dimension: "Replacement Dimension",
            },
            origin: {
              name: "unknown",
              dimension: null,
            },
          },
          {
            id: "17",
            name: "Annie",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Female",
            location: {
              name: "Anatomy Park",
              dimension: "Dimension C-137",
            },
            origin: {
              name: "Earth (C-137)",
              dimension: "Dimension C-137",
            },
          },
          {
            id: "18",
            name: "Antenna Morty",
            status: "Alive",
            species: "Human",
            type: "Human with antennae",
            gender: "Male",
            location: {
              name: "Citadel of Ricks",
              dimension: "unknown",
            },
            origin: {
              name: "unknown",
              dimension: null,
            },
          },
          {
            id: "19",
            name: "Antenna Rick",
            status: "unknown",
            species: "Human",
            type: "Human with antennae",
            gender: "Male",
            location: {
              name: "unknown",
              dimension: null,
            },
            origin: {
              name: "unknown",
              dimension: null,
            },
          },
          {
            id: "20",
            name: "Ants in my Eyes Johnson",
            status: "unknown",
            species: "Human",
            type: "Human with ants in his eyes",
            gender: "Male",
            location: {
              name: "Interdimensional Cable",
              dimension: "unknown",
            },
            origin: {
              name: "unknown",
              dimension: null,
            },
          },
        ],
        info: {
          count: 826,
          pages: 42,
          next: 2,
          prev: null,
        },
      },
    },
  },
};

const errorMock = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: { page: 1 },
    },
    error: new Error("An error occurred"),
  },
];

const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },

  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "species",
    header: "Species",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "origin.name",
    header: "Origin",
  },
  {
    accessorKey: "location.name",
    header: "Location",
  },
];

describe("PaginatedTable", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider mocks={[dataMock]} addTypename={false}>
        <PaginatedTable
          query={GET_CHARACTERS}
          queryName="characters"
          columns={columns}
        />
      </MockedProvider>
    );

    await waitFor(() => {
      const linkElement = screen.getByText(/Rick Sanchez/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it("shows a spinner during loading", () => {
    render(
      <MockedProvider
        mocks={[{ ...dataMock, delay: 1000 }]}
        addTypename={false}>
        <PaginatedTable
          query={GET_CHARACTERS}
          queryName="characters"
          columns={columns}
        />
      </MockedProvider>
    );

    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
  });

  it("displays an error message when the query fails", async () => {
    render(
      <MockedProvider mocks={errorMock} addTypename={false}>
        <PaginatedTable
          query={GET_CHARACTERS}
          queryName="characters"
          columns={columns}
        />
      </MockedProvider>
    );

    const errorMessage = await screen.findByText(/An error occurred/i);
    expect(errorMessage).toBeInTheDocument();
  });
});

describe("Pagination in PaginatedTable", () => {
  it("disables the 'Previous' button on the first page", async () => {
    render(
      <MockedProvider mocks={[dataMock]} addTypename={false}>
        <PaginatedTable
          query={GET_CHARACTERS}
          queryName="characters"
          columns={columns}
        />
      </MockedProvider>
    );

    await waitFor(() => {
      const previousButton = screen.getByRole("button", {
        name: "Go to previous page",
      });
      expect(previousButton).toBeDisabled();
    });
  });

  it("disables the 'Next' button on the last page", async () => {
    // wouldn't do this in real life obviously, deep copying objects like this
    // should rather reset and setup mocks between each test
    const copy = JSON.parse(JSON.stringify(dataMock));
    copy.result.data.characters.info.next = null;
    render(
      <MockedProvider mocks={[copy]} addTypename={false}>
        <PaginatedTable
          query={GET_CHARACTERS}
          queryName="characters"
          columns={columns}
        />
      </MockedProvider>
    );

    await waitFor(() => {
      const nextButton = screen.getByRole("button", {
        name: "Go to next page",
      });
      expect(nextButton).toBeDisabled();
    });
  });
});
